var DefineMap = require("can-define/map/map");
var route = require("can-route");

var AppViewModel = DefineMap.extend({
	page: "string",
	hello: function hello() {
		return "world";
	}
});

module.exports = AppViewModel;
