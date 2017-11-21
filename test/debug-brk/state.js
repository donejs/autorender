define(["can-map", "./broken-module", "can-route"], function(Map, broken){
	return Map.extend({
		hello: function(){
			return "world";
		}
	});
});
