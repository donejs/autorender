import DefineMap from "can-define/map/map";
import route from "can-route";

route.register("{page}", { page: "fromRoute" });

export default DefineMap.extend({
	page: {
		default: "fromVM"
	},
	routeData: {
		default: () => route.data
	}
});
