var DefineMap = require("can-define/map/map");
require("can-route");

var AppViewModel = DefineMap.extend({
	get stuffPromise() {
		return new Promise(function(resolve, reject){
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "foo://bar");
			xhr.onload = function(){
				var data = JSON.parse(xhr.responseText);
				resolve(data);
			};
			xhr.send();
		});
	},

	stuff: {
		get: function(last, resolve){
			this.stuffPromise.then(resolve);
		}
	}
});

module.exports = AppViewModel;
