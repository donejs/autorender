define([
	"@loader",
	"module",
	"can/view/stache/intermediate_and_imports",
	"./template.txt!steal-template"
], function(loader, module, getIntermediateAndImports, template){

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

	function translate(load){
		var intermediateAndImports = getIntermediateAndImports(load.source);

		var ases = intermediateAndImports.ases;
		var imports = intermediateAndImports.imports;
		var args = [];
		can.each(ases, function(from, name){
			// Move the as to the front of the array.
			imports.splice(imports.indexOf(from), 1);
			imports.unshift(from);

			// Get rid of @ character for the viewModel
			if(name[0] === "@") {
				name = name.substr(1);
			}
			args.unshift(name);
		});
		imports.unshift("can/view/stache/stache");
		args.unshift("stache");


		var output = template({
			imports: JSON.stringify(intermediateAndImports.imports),
			args: args.join(", "),
			intermediate: JSON.stringify(intermediateAndImports.intermediate),
			ases: can.map(ases, function(from, name){
				return "\t" + name + ": " + name +"['default'] || " + name;
			}).join(",\n")
		});

		return output;
	}

  return {
    translate: translate
  };
});
