import DefineMap from "can-define/map/map";
import route from "can-route";

route.register("{page}", { page: "fromRoute" });

const MyRouteData = DefineMap.extend("MyRouteData", {
	page: "string",
	name: {
		default: () => "Wilbur"
	}
});

export default DefineMap.extend({
	page: {
		default: "fromVM"
	},
	routeData: {
		Default: MyRouteData
	}
});
