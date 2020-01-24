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
		},
		head: {
			default: () => document.head,
			serialize: false
		},
		seoSchema: {
			default: `{
				"@context": "https://schema.org",
				"@type": "Article",
				"headline": "A Headline",
				"image": "",  
				"author": {
					"@type": "",
					"name": "Cherif"
				},  
				"publisher": {
					"@type": "Organization",
					"name": "Cherif",
					"logo": {
					"@type": "ImageObject",
					"url": "",
					"width": ,
					"height": 
					}
				},
				"datePublished": ""
			}`
		}
	});

	route.register("{page}", { page: "home" });

	return AppViewModel;
});
