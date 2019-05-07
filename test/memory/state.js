define([
	"can-define/map/map",
	"can-route",
	"can-component",
	"can-dom-mutate",
	"can-view-nodelist"
], function(DefineMap, route, Component, domMutate, canNodeList){
	var autoMain, zoneData;
	window.domMutate = domMutate;
	const Foo = Component.extend({
		tag: "my-foo",
		view: "{{this.value}}",
		ViewModel: {
			value: {default: "My FOO RENDERED"}
		}
	});

	var AppViewModel = DefineMap.extend({
		env: {
			default: () => ({NODE_ENV:'development'}),
			serialize: false
		},
		get fooComponent(){
			return 2;
		},
		page: "string",
		param: "string",
		hello: function(){
			return "world";
		}/*,
		head: {
			default: () => document.head,
			serialize: false
		}*/
	});

	route.register("{page}", { page: "home" });


	var count = 5;

	function inner(){

		autoMain.renderAndAttach().then(function(r){
			zoneData = r.zoneData;
		});

		count--;
		if(count > 0) {
			setTimeout(cycle, 30);
		} else {
			var nodeList = zoneData.nodeList;
			document.querySelector("#root").textContent = (!!nodeList).toString();

			autoMain = null;
		}
	}

	function cycle(){
		if(zoneData) {
			canNodeList.unregister( zoneData.nodeList );
		}

		domMutate.node.replaceChild.call(document, document.createElement("html"), document.documentElement);
		document.documentElement.innerHTML = "<head></head><body><div id='root' data-keep></div></body>";

		setTimeout(inner, 30);
	}

	steal.import("test/memory/index.stache!done-autorender").then(function(main) {
		autoMain = main;
		setTimeout(cycle, 500);
	});

	return AppViewModel;
});
