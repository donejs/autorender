define([
	"@steal",
	"@loader",
	"module",
	"./template",
	"./parse",
	"steal-stache/add-bundles",
	"steal-config-utils/import-specifiers"
], function(steal, loader, module, template, parse, addBundles, importSpecifiers) {
	var addImportSpecifiers = importSpecifiers.addImportSpecifiers;
	return function init(zoneOpts, isDevelopment){
		var main;

		var isNode = typeof process === "object" &&
			{}.toString.call(process) === "[object process]";

		if(!isNode) {
			steal.done().then(setup);
		}

		function setup(){
			loader.import(loader.main).then(function(r){
				main = r;
				liveReload();
			});
		}

		function liveReload(){
			if(!loader.liveReloadInstalled) {
				return;
			}

			loader.import("live-reload", { name: module.id }).then(function(reload){
				loader.normalize(loader.main).then(function(mainName){
					var shouldRerender = true;
					reload(function(){
						if(shouldRerender) {
							document.documentElement.removeAttribute("data-attached");
							main.renderAndAttach();
						}
						shouldRerender = true;
					});

					reload.dispose(mainName, function(){
						main.teardownRouting();
						document.documentElement.removeAttribute("data-attached");
						shouldRerender = false;
					});

					reload(mainName, function(r){
						main = r;
					});
				});
			});
		}

		//!steal-remove-start
		function getFilename(name) {
			var hash = name.indexOf('#');
			var bang = name.indexOf('!');

			return name.slice(hash < bang ? (hash + 1) : 0, bang);
		}
		//!steal-remove-end

		function translate(load){
			var filename;
			//!steal-remove-start
			filename = getFilename(load.name);
			//!steal-remove-end

			var result = parse(load.source, this, zoneOpts);

			// Add any import specifiers to the load.
			addImportSpecifiers(load, result);
			load.metadata.originalSource = load.source;

			// Register dynamic imports for the slim loader config
			var localLoader = loader.localLoader || loader;
			if (localLoader.slimConfig) {
				localLoader.slimConfig.needsDynamicLoader = true;

				var toMap = localLoader.slimConfig.toMap;
				Array.prototype.push.apply(toMap, result.rawImports);
				Array.prototype.push.apply(toMap, result.dynamicImports);
			}

			return Promise.all([
				addBundles(result.dynamicImports, load.name),
				Promise.all(result.imports)
			]).then(function(pResults){
				var exportedValuesDef = Object.keys(result.ases)
				.map(function(name){
					return "\"" + name + "\": {\n" +
					"\t\t\tenumerable: true,\n" +
					"\t\t\tconfigurable: true,\n" +
					"\t\t\twritable: true,\n" +
					"\t\t\tvalue: " + name + "['default'] || " + name + "\n" +
					"\t\t}";
				}).join(",\n");

				var output = template({
					imports: JSON.stringify(pResults[1]),
					isDevelopment: isDevelopment || false,
					routeData: result.viewModel.routeData || "",
					args: result.args.join(", "),
					zoneOpts: JSON.stringify(zoneOpts),
					intermediate: JSON.stringify(result.intermediate),
					ases: exportedValuesDef ? exportedValuesDef + "," : "",
					filename: filename
				});

				return output;
			});
		}

		return {
			translate: translate
		};
	};
});
