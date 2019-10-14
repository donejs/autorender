var loader = require("@loader");
var reloadAll = loader.get("live-reload").default;
var reload = require("live-reload");

window.ONRUNNING = function(){
	debugger;
}

function reloadName(moduleName) {
	return loader.normalize(moduleName).then(function(name){
		return reloadAll([name]).then(function(){
			// A placeholder for debugging if needed
		});
	});
}

var reloadApp = reloadName.bind(null, "~/test/live-reload/app");
var reloadOther = reloadName.bind(null, "~/test/live-reload/other-page");


reloadApp();

window.LOAD_OTHER = function() {
	reloadOther();
};
