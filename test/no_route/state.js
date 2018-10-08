define([
	"can-define/map/map"
], function(DefineMap){
	return DefineMap.extend({
		param: "string",
		hello: function () {
			return "world";
		}
	});
});
