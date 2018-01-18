import dep from "./dep";
import timeout from "can-zone/timeout";
import Zone from "can-zone";

const d = dep();

function MyApp() {
	Object.defineProperty(this, "message", {
		value: "Hello world!",
		enumerable: false
	});
}

MyApp.prototype.runMe = function(){
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
};

function addResult(txt) {
	var div = document.getElementById("result");
	if(div && !div.textContent) {
		div.textContent = txt;
	}
}

export default MyApp;
