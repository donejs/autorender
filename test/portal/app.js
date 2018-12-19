const DefineMap = require("can-define/map/map");
const route = require("can-route");

const AppViewModel = DefineMap.extend("AppViewModel", {
	page: "string",
	param: "string"
});

route.register("{page}", { page: "home" });

module.exports = AppViewModel;
