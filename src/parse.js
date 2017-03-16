define([
	"module",
	"can-stache/src/intermediate_and_imports",
	"can-util/js/each/each"
], function(module, getIntermediateAndImports, each){

	return function(source, loader){
		var intermediateAndImports = getIntermediateAndImports(source);

		var ases = intermediateAndImports.ases;
		var imports = intermediateAndImports.imports;
		var args = [];
		each(ases, function(from, name){
			// Move the as to the front of the array.
			imports.splice(imports.indexOf(from), 1);
			imports.unshift(from);

			// Get rid of @ character for the viewModel
			if(name[0] === "@") {
				name = name.substr(1);
			}
			args.unshift(name);
		});

		var n = function(name){
			return loader.normalize(name, module.id);
		};

		var params = [
			[n("can-zone"), "Zone"],
			[n("can-zone/xhr"), "xhrZone"],
			[n("can-stache"), "stache"],
			[n("can-util/dom/data/data"), "domData"],
			[n("can-route"), "route"],
			[n("can-util/dom/child-nodes/child-nodes"), "childNodes"],
			[n("can-util/dom/mutate/mutate"), "mutate"],
			[n("can-util/namespace"), "can"],
			["module", "module"],
			[n("can-view-import"), "canViewImport"]
		];

		each(params, function(param){
			imports.unshift(param[0]);
			args.unshift(param[1]);
		});

		return {
			imports: imports,
			dynamicImports: intermediateAndImports.dynamicImports,
			args: args,
			ases: ases,
			intermediate: intermediateAndImports.intermediate
		};
	};

});
