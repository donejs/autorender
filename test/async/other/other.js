var Component = require("can-component");
var Map = require("can-map");
require("can-map-define");
var List = require("can-list");

var ViewModel = Map.extend({
	define: {
		things: {
			Value: List,
			get: function(list){
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "foo://bar");
				xhr.onload = function(){
					var data = JSON.parse(xhr.responseText);
					list.replace(data);
				};
				xhr.send();
				return list;
			}
		}
	}
});

Component.extend({
	tag: "other-page",
	template: require("./other.stache!"),
	ViewModel: ViewModel
});
