define([
	"can/view/stache/intermediate_and_imports"
], function(getIntermediateAndImports){

	return function(source){
		var intermediateAndImports = getIntermediateAndImports(source);

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

		// Add stache
		imports.unshift("can/view/stache/stache");
		args.unshift("stache");

		// Add module
		imports.unshift("module");
		args.unshift("module");

		return {
			imports: imports,
			dynamicImports: intermediateAndImports.dynamicImports,
			args: args,
			ases: ases,
			intermediate: intermediateAndImports.intermediate
		};
	};

});
