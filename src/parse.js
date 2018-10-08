define([
	"module",
	"can-stache-ast",
	"can-reflect"
], function(module, canStacheAst, canReflect){
	function hasExportAs(attrs) {
		return attrs.has("export-as") || attrs.has("as");
	}

	function getExportAs(attrs) {
		return attrs.get("export-as") || attrs.get("as");
	}

	function viewModelInfo(ast) {
		var info = {ases: {}};

		for(var i = 0; i < ast.importDeclarations.length; i++) {
			var canImport = ast.importDeclarations[i];
			var attrs = canImport.attributes;

			if(hasExportAs(attrs)) {
				info.ases[getExportAs(attrs)] = canImport.specifier;
			}

			if(attrs.has("route-data")) {
				info.routeData = attrs.get("route-data");
			}
		}

		return info;
	}

	return function(source, loader, zoneOpts){
		var ast = canStacheAst.parse(source);

		var canImport = viewModelInfo(ast);

		var ases = ast.ases;
		var imports = ast.imports.slice(0);
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
			[n("can-dom-mutate"), "domMutate"],
			[n("can-dom-mutate/node"), "domMutateNode"],
			[n("can-util/js/is-empty-object/is-empty-object"), "isEmptyObject"],
			[n("can-view-import"), "canViewImport"],
			[n("can-stache-bindings"), "canStacheBindings"],
			[n("can-reflect"), "canReflect"],
			[n("can-namespace"), "can"],
			[n("full-url/index"), "fullUrl"],
			[n("can-symbol"), "canSymbol"],
			[n("can-log/dev/dev"), "canDev"],
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
			rawImports: ast.imports,
			dynamicImports: ast.dynamicImports,
			importDeclarations: ast.importDeclarations,
			args: args,
			ases: ases,
			intermediate: ast.intermediate,
			viewModel: canImport
		};
	};

});
