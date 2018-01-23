define([
	"can-define/map/map",
	"can-route"
], function(DefineMap) {
	return DefineMap.extend("AppViewModel", {
		hello: function hello() {
			return "world";
		}
	});
});
