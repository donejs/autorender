var Map = require("can-map");
var List = require("can-list");
require("can-map-define");
require("can-route");

module.exports = Map.extend({
	define: {
		stuff: {
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
