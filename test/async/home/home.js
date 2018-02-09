var Component = require("can-component");
var DefineMap = require("can-define/map/map");

var ViewModel = DefineMap.extend({
	showThing: {
		default: false
	}
});

Component.extend({
	tag: "home-page",
	view: require("./home.stache"),
	ViewModel: ViewModel,
	events: {
		init: function(){
			var vm = this.viewModel;
			setTimeout(function(){
				vm.showThing = true;
			}, 50);
		}
	}
});
