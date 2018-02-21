define([
	"can-define/map/map",
	"can-route"
], function(DefineMap, route){
	var AppViewModel = DefineMap.extend({
		page: "string",
		param: "string",
		hello: function(){
			return "world";
		}
	});

	route.register("{page}", { page: "home" });

	return AppViewModel;
});
