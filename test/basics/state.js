define([
	"can-define/map/map",
	"can-route"
], function(DefineMap, route){
	var AppViewModel = DefineMap.extend({
		env: {
			default: () => ({NODE_ENV:'development'}),
			serialize: false
		},
		page: "string",
		param: "string",
		hello: function(){
			return "world";
		}
	});

	route.register("{page}", { page: "home" });

	return AppViewModel;
});
