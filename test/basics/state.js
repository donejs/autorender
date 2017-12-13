define([
	"can-define/map/map",
	"can-route"
], function(DefineMap, route){
	var AppViewModel = DefineMap.extend({
		page: "string",
		hello: function(){
			return "world";
		}
	});

	route("{page}", { page: "home" });

	return AppViewModel;
});
