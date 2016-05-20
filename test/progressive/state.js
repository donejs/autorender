define([
	"can-map",
	"@loader",
	"can-route"
], function(Map, loader){
	return Map.extend({
		bundles: function(){
			return loader.bundle;
		},
		hello: function(){
			return "world";
		}
	});
});
