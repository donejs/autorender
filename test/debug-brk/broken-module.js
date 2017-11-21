var callbacks = require("can-view-callbacks");

function doWork() {
	var foo = "bar";
	var baz = "qux";

	setTimeout(doWork, 200);
}

callbacks.tag("infinite-loop", function(){
	doWork();
});
