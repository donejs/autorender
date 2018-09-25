define([
	"module",
	"can-stache-ast",
	"can-reflect"
], function(module, canStacheAst, canReflect){
	var getIntermediateAndImports = canStacheAst.parse;

	return function(source, loader, zoneOpts){
		var intermediateAndImports = getIntermediateAndImports(source);

		var ases = intermediateAndImports.ases;
		var imports = intermediateAndImports.imports.slice(0);
		var args = [];
		canReflect.each(ases, function(from, name){
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
			[n("can-view-scope"), "Scope"],
			[n("can-stache"), "stache"],
			[n("can-route"), "route"],
			[n("can-util/dom/child-nodes/child-nodes"), "childNodes"],
			[n("can-dom-mutate/node"), "mutate"],
			[n("can-util/js/is-empty-object/is-empty-object"), "isEmptyObject"],
			[n("can-view-import"), "canViewImport"],
			[n("can-stache-bindings"), "canStacheBindings"],
			[n("can-reflect"), "canReflect"],
			[n("can-namespace"), "can"],
			[n("full-url/index"), "fullUrl"],
			[n("can-symbol"), "canSymbol"],
			["module", "module"],
			["@loader", "loader"],
			["@steal", "steal"]
		];

		if (zoneOpts.useZones) {
			params.unshift([n("can-zone/xhr"), "xhrZone"]);
			params.unshift([n("can-zone"), "Zone"]);

			if(zoneOpts.useDebug) {
				params.unshift([n("can-zone/debug"), "debugZone"]);
			}
		}

		canReflect.each(params, function(param){
			imports.unshift(param[0]);
			args.unshift(param[1]);
		});

		return {
			imports: imports,
			rawImports: intermediateAndImports.imports,
			dynamicImports: intermediateAndImports.dynamicImports,
			importDeclarations: intermediateAndImports.importDeclarations,
			args: args,
			ases: ases,
			intermediate: intermediateAndImports.intermediate
		};
	};

});
