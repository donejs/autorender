define([
	"@loader",
	"module",
	"./parse",
	"./template"
], function(loader, module, parse, template){
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
		if(!loader.has("live-reload")) {
			return;
		}

		loader.import("live-reload", { name: module.id }).then(function(reload){
			loader.normalize(loader.main).then(function(mainName){
				reload(function(){
					main.rerender();
				});

				reload(mainName, function(r){
					main = r;
				});
			});
		});
	}

	function addBundles(dynamicImports) {
		var localLoader = loader.localLoader || loader;
		if(!dynamicImports.length) {
			return;
		}

		var bundle = localLoader.bundle;
		if(!bundle) {
			bundle = localLoader.bundle = [];
		}

		can.each(dynamicImports, function(moduleName){
			if(!~bundle.indexOf(moduleName)) {
				bundle.push(moduleName);
			}
		});
	}

	function translate(load){
		var result = parse(load.source);

		addBundles(result.dynamicImports);

		var output = template({
			imports: JSON.stringify(result.imports),
			args: result.args.join(", "),
			intermediate: JSON.stringify(result.intermediate),
			ases: can.map(result.ases, function(from, name){
				return "\t" + name + ": " + name +"['default'] || " + name;
			}).join(",\n")
		});

		return output;
	}

  return {
    translate: translate
  };
});
