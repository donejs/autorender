var QUnit = require("steal-qunit");
var loader = require("@loader");
var testHelpers = require("./helpers");

var makeDoc = testHelpers.makeDoc;
var makeContextForDocument = testHelpers.makeContextForDocument;
var Request = testHelpers.Request;

QUnit.module("SSR Render with basics", {
	setup: function(assert){
		var done = assert.async();

		var test = this;

		loader.config({
			autorenderAutostart: false
		});
		loader["import"]("test/basics/index.stache!done-autorender")
		.then(function(render){
			test.render = render;
		})
		.then(done, done);
	}
});

QUnit.test("renders to a document", function(assert){
	var render = this.render;
	var doc = makeDoc();
	var context = makeContextForDocument(render, doc);
	var request = new Request("/");

	render.call(context, request);
	assert.ok(doc.body.querySelector("#hello"), "element was appended");

	var statusCode = Number(doc.body.querySelector("#status-code").textContent);
	assert.equal(statusCode, 200, "Got a 200");

	var automount = doc.documentElement.dataset.canAutomount;
	assert.equal(automount, "false", "Renders with <html can-automount=\"false\"");
});

QUnit.test("renders 404s", function(assert){
	var render = this.render;
	var doc = makeDoc();
	var context = makeContextForDocument(render, doc);
	var request = new Request("/some/fake/route");

	render.call(context, request);

	var statusCode = Number(doc.body.querySelector("#status-code").textContent);
	var statusMessage = doc.body.querySelector("#status-message").textContent;

	assert.equal(statusCode, 404, "Got a 404");
	assert.equal(statusMessage, "Not found", "correct message");
});

QUnit.test("renders with query params", function(assert){
	var render = this.render;
	var doc = makeDoc();
	var context = makeContextForDocument(render, doc);
	var request = new Request("/cart&param=works");

	render.call(context, request);
	console.log(doc.body.outerHTML);

	var param = doc.body.querySelector("#some-param").textContent;
	assert.equal(param, "works", "the param was part of the VM");
});

QUnit.module("#renderInZone with basics", {
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

	autorender.renderInZone().promise
	.then(function(result){
		assert.equal(result.fragment.nodeType, 11, "It is a document fragment");
	})
	.then(done, done);
});
