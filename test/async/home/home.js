var Component = require("can-component");
var Map = require("can-map");

var ViewModel = Map.extend({
	showThing: false
});

Component.extend({
	tag: "home-page",
	template: require("./home.stache!"),
	ViewModel: ViewModel,
	events: {
		init: function(){
			var vm = this.viewModel;
			setTimeout(function(){
				vm.attr("showThing", true);
			}, 50);
		}
	}
});
