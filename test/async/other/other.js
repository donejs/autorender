var Component = require("can-component");
var DefineMap = require("can-define/map/map");

var ViewModel = DefineMap.extend("OtherViewModel", {
	get thingsPromise() {
		return new Promise(function(resolve){
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "foo://bar");
			xhr.onload = function(){
				var data = JSON.parse(xhr.responseText);
				resolve(data);
			};
			xhr.send();
		});
	},
	things: {
		get: function(last, resolve){
			this.thingsPromise.then(resolve);
		}
	}
});

Component.extend({
	tag: "other-page",
	view: require("./other.stache"),
	ViewModel: ViewModel
});
