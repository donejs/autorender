var DefineMap = require("can-define/map/map");
require("can-route");

var AppViewModel = DefineMap.extend({
	get hello() {
		return "world";
	}
});

module.exports = AppViewModel;
