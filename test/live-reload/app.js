import dep from "./dep";
import timeout from "can-zone/timeout";
import Zone from "can-zone";
import DefineMap from "can-define/map/map";
import route from "can-route";
import "can-stache-bindings";

const d = dep();

const MyApp = DefineMap.extend("MyApp", {
	message: {
		default: "Hello world!",
		serialize: false
	},

	page: "string",

	runMe: function(){
		var zone = new Zone([
			timeout(200)
		]);

		Zone.ignore(function(){
			zone.run(function(){
				d.decrement();
				d.increment();
			})
			.then(function(){
				setTimeout(function(){
					addResult("worked");
				}, 300);
			}, function(err){
				addResult("failed");
			});
		})();

		return 'yay';
	},

	currentPage: {
		get: function(){
			return route.data.page;
		}
	},

	setPage: function(page) {
		this.page = page;
	}
});

function addResult(txt) {
	var div = document.getElementById("result");
	if(div && !div.textContent) {
		div.textContent = txt;
	}
}

route.register("{page}", { page: "home" });

export default MyApp;
