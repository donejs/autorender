define(["can-map", "can-route"], function(Map){
	return Map.extend({
		hello: function(){
			return "world";
		}
	});
});
