var QUnit = require("steal-qunit");
var loader = require("@loader");

function makeDoc(){
	var doc = document.createElement("html");
	var body = document.createElement('body');
	doc.appendChild(body);
	doc.body = body;
	return doc;
}

QUnit.module("#render with basics", {
	setup: function(assert){
		var done = assert.async();

		var test = this;

		loader.config({
			autorenderAutostart: false
		});
		loader["import"]("test/basics/index.stache!done-autorender")
		.then(function(autorender){
			test.autorender = autorender;
		})
		.then(done, done);
	}
});

QUnit.test("renders to a document", function(assert){
	var autorender = this.autorender;

	var doc = makeDoc();
	var state = new autorender.viewModel();

	autorender.render(doc, state);

	assert.ok(doc.body.querySelector("#hello"), "element was appended");
});

QUnit.module("#renderAsync with basics", {
	setup: function(assert){
		var done = assert.async();

		var test = this;

		loader.config({
			autorenderAutostart: false
		});
		loader["import"]("test/basics/index.stache!done-autorender")
		.then(function(autorender){
			test.autorender = autorender;
		})
		.then(done, done);
	}
});

QUnit.test("renders to a document", function(assert){
	var autorender = this.autorender;
	var done = assert.async();

	var doc = makeDoc();
	var state = new autorender.viewModel();

	autorender.renderAsync()
	.then(function(result){
		assert.equal(result.fragment.nodeType, 11, "It is a document fragment");
	})
	.then(done, done);
});
