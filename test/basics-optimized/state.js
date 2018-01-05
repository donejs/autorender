define(["can-map", "can-route"], function(Map) {
	if (!window.steal.map["test/basics-optimized/state"]) {
		throw new Error("can-import modules should be registered");
	}

	return Map.extend({
		hello: function() {
			return "world";
		}
	});
});

