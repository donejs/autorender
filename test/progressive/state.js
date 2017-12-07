var DefineMap = require("can-define/map/map");
var loader = require("@loader");
require("can-route");

var AppViewModel = DefineMap.extend({
	bundles: function(){
		return loader.bundle;
	},
	hello: function(){
		return "world";
	}
});

module.exports = AppViewModel;
