define(["can-define/map/map", "can-route"], function(DefineMap){
	var AppViewModel = DefineMap.extend({
		hello: function(){
			return "world";
		}
	});

	return AppViewModel;
});
