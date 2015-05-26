define(["@loader", "module", "can/view/stache/intermediate_and_imports"],
	   function(loader, module, getIntermediateAndImports){

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

	var start = function(){
		var state = this.state = new this.viewModel;
		can.route.map(state);
		can.route.ready();
		this.rerender();
	},
	renderAsync = function(){
		var renderer = this.render;
		var data = this.state;
		var options = {};

		var frag = renderer(data, options);

		function waitForPromises(){
			var readyPromises = [];
			if(data.__readyPromises) {
				readyPromises = data.__readyPromises;
				data.__readyPromises = [];
			}

			if(readyPromises.length === 0) {
				return new can.Deferred().resolve();
			}

			return can.when.apply(can, readyPromises).then(waitForPromises);
		}

		return waitForPromises().then(function(){
			return {
				fragment: frag,
				data: data.__pageData
			};
		});
	},
	rerender = function(){
		var keep = { "SCRIPT": true, "STYLE": true, "LINK": true };
		function eachChild(parent, callback){
			can.each(can.makeArray(parent.childNodes), function(el){
				if(!keep[el.nodeName]) {
					callback(el);
				}
			});
		}

		function remove(el) {
			can.remove(el);
		}

		function appendTo(parent){
			return function(el){
				can.appendChild(parent, el);
			}
		}

		this.renderAsync().then(function(result){
			var frag = result.fragment;
			var head = document.head;
			var body = document.body;

			// Move elements from the fragment's head to the document head.
			eachChild(head, remove);
			eachChild(can.$("head", frag)[0], appendTo(head));

			// Move elements from the fragment's body to the document body.
			eachChild(body, remove);
			eachChild(can.$("body", frag)[0], appendTo(body));
		});
	};

	function translate(load){
		var intermediateAndImports = getIntermediateAndImports(load.source);

		var ases = intermediateAndImports.ases;
		var imports = intermediateAndImports.imports;
		var args = [];
		can.each(ases, function(from, name){
			// Move the as to the front of the array.
			imports.splice(imports.indexOf(from), 1);
			imports.unshift(from);
			args.unshift(name);
		});
		imports.unshift("can/view/stache/stache");
		args.unshift("stache");

		return "define("+JSON.stringify(intermediateAndImports.imports)+",function(" +
			args.join(", ") + "){\n" +
			"var __export = {\n" +
			"\trender: stache(" + JSON.stringify(intermediateAndImports.intermediate) + "),\n" +
			"\tstart: " + start.toString() + ",\n" +
			"\trerender: " + rerender.toString() + ",\n" +
			"\trenderAsync: " + renderAsync.toString() + ",\n" +
			can.map(ases, function(from, name){
				return "\t" + name + ": " + name +"['default'] || " + name;
			}).join(",\n") +
			"\n};\n\n" +
			"if(typeof steal !== 'undefined' && !(typeof process === 'object' && {}.toString.call(process) === '[object process]')) steal.done().then(function() { __export.start(); });\n" +
			"return __export;\n" +
		"});";
	}

  return {
    translate: translate
  };
});
