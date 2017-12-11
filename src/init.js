define([
	"@steal",
	"@loader",
	"module",
	"./template",
	"./parse",
	"steal-stache/add-bundles",
	"can-util/js/each/each"
], function(steal, loader, module, template, parse, addBundles, each){
	return function init(zoneOpts){
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
					reload(function(){
						document.documentElement.removeAttribute("data-attached");
						main.renderAndAttach();
					});

					reload(mainName, function(r){
						main = r;
					});
				});
			});
		}

		function translate(load){
			var result = parse(load.source, this, zoneOpts);

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
					args: result.args.join(", "),
					zoneOpts: JSON.stringify(zoneOpts),
					intermediate: JSON.stringify(result.intermediate),
					ases: exportedValuesDef ? exportedValuesDef + "," : ""
				});

				return output;
			});
		}

		return {
			translate: translate
		};
	}
});
