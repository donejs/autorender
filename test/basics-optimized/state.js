define([
	"can-define/map/map",
	"can-route"
], function(DefineMap) {
	if (!window.steal.map["test/basics-optimized/state"]) {
		throw new Error("can-import modules should be registered");
	}

	return DefineMap.extend("AppViewModel", {
		hello: function hello() {
			return "world";
		}
	});
});
