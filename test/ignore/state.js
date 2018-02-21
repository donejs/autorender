define(["can-define/map/map", "can-route"], function(DefineMap, route) {
	var AppViewModel = DefineMap.extend({
		page: "string",
		hello: function hello() {
			return "world";
		}
	});
	return AppViewModel;
});
