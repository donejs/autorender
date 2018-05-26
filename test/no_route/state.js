define([
	"can-define/map/map"
], function(DefineMap){
	return DefineMap.extend({
		hello: function () {
			return "world";
		}
	});
});
