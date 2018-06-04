var loader = require("@loader");
var reloadAll = loader.get("live-reload").default;
var reload = require("live-reload");

window.ONRUNNING = function(){
	debugger;
}

loader.normalize("~/test/live-reload/app").then(function(name){
	reloadAll([name]).then(function(){
		//console.log("reloaded");
	});
});
