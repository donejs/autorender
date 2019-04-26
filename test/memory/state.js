define([
	"can-define/map/map",
	"can-route",
	"can-component",
	"can-dom-mutate",
	"can-view-nodelist"
], function(DefineMap, route, Component, domMutate, canNodeList){
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


	var count = 50;

	function inner(){
		document.documentElement.innerHTML = "<head></head><body></body>";
		AUTO_MAIN.renderAndAttach();

		count--;
		if(count > 0) {
			setTimeout(cycle, 30);
		} else {
			AUTO_MAIN = null;
			console.log("done");
		}
	}

	function cycle(){
		/*var div = document.querySelector("div");

		domMutate.onNodeRemoval(div, function () {
			console.log("REMOVED!!");
		});
		//window.REPLACED = true;*/
		// canNodeList.unregister( window.BIG_NODE_LIST );
		domMutate.node.replaceChild.call(document, document.createElement("html"), document.documentElement);

		//setTimeout(inner, 30);
	}
	setTimeout(cycle, 500);
	window.canNodeList = canNodeList;

	return AppViewModel;
});
