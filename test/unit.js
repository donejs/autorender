var QUnit = require("steal-qunit");
var loader = require("@loader");
var testHelpers = require("./helpers");
var canTestHelpers = require("can-test-helpers");
var canRoute = require("can-route");
var globals = require("can-globals");

var makeDoc = testHelpers.makeDoc;
var makeContextForDocument = testHelpers.makeContextForDocument;
var Request = testHelpers.Request;
var makeHeaders = testHelpers.makeHeaders;

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
		.then(done, function(e){
			assert.ok(false, e);
			done();
		});
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

	var param = doc.body.querySelector("#some-param").textContent;
	assert.equal(param, "works", "the param was part of the VM");
});

QUnit.test("renders with h2", function(assert){
	var render = this.render;
	var doc = makeDoc();
	var context = makeContextForDocument(render, doc);
	var headers = makeHeaders("/");

	render.call(context, headers);
	assert.ok(doc.body.querySelector("#hello"), "element was appended");

	var statusCode = Number(doc.body.querySelector("#status-code").textContent);
	assert.equal(statusCode, 200, "Got a 200");

	var automount = doc.documentElement.dataset.canAutomount;
	assert.equal(automount, "false", "Renders with <html can-automount=\"false\"");
});

QUnit.module("SSR Render with route-data attribute", {
	setup: function(assert){
		var done = assert.async();

		var test = this;

		loader.config({
			autorenderAutostart: false
		});
		loader["import"]("test/routedata/index.stache!done-autorender")
		.then(function(render){
			test.render = render;
		})
		.then(done, function(e){
			assert.ok(false, e);
			done();
		});
	}
});

QUnit.test("route.data is bound to the location params", function(assert) {
	var render = this.render;
	var doc = makeDoc();
	var context = makeContextForDocument(render, doc);
	var request = new Request("/cart");

	var isBrowserWindow = globals.getKeyValue("isBrowserWindow");
	globals.setKeyValue("isBrowserWindow", false);
	render.call(context, request);
	globals.setKeyValue("isBrowserWindow", isBrowserWindow);

	// Assertions
	var text = function(sel) { return doc.body.querySelector(sel).textContent; };
	assert.equal(text("h1"), "fromVM");
	assert.equal(text("h2"), "cart");
	assert.equal(text("h3"), "cart");
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

QUnit.module("SSR Route", {
	setup: function(assert){
		var done = assert.async();
		var test = this;

		loader.config({
			autorenderAutostart: false
		});
		loader["import"]("test/no_route/index.stache!done-autorender")
			.then(function(render){
				test.render = render;
			})
			.then(done, function(e){
				assert.ok(false, e);
				done();
			});
	}
});

QUnit.test("Warn if no routes", function(assert){
	var render = this.render;
	var doc = makeDoc();
	var context = makeContextForDocument(render, doc);
	var request = new Request("/");

	// because canRoute is global and we are running tests before that have a route initialized
	// we have clear the routes manually
	canRoute.routes = {};

	var teardown = canTestHelpers.dev.willWarn(/receive route definitions/);

	render.call(context, request);
	assert.equal(teardown(), 1, "Received a warning in console");
});

QUnit.module("connectViewModelAndAttach");

QUnit.test("Does not warn", function(assert){
	var done = assert.async();
	var teardown = canTestHelpers.dev.willWarn(/Unable to find key/);

	testHelpers.load("test/basics/index.stache!done-autorender")
	.then(function(autorender){
		var doc = makeDoc();
		var context = makeContextForDocument(autorender, doc);
		return context.connectViewModelAndAttach();
	})
	.then(function(){
		assert.equal(teardown(), 0, "No warnings for undefined keys");
	})
	.then(done, function(err){
		QUnit.ok(false, err);
		done();
	});
});

QUnit.test("Importing a module that does not exist", function(assert){
	var done = assert.async();

	testHelpers.load("~/test/basics/oops.stache!done-autorender")
	.then(null, function(err){
		var msg = err.message;
		var stack = err.stack;

		assert.ok(/<can-import/.test(msg), "the can-import shows up");
		assert.ok(/not-exists/.test(msg), "Alludes to not-exists being the problem");
		assert.ok(/oops.stache/.test(stack), "The stache file is in the stack");
		done();
	});
});

QUnit.test("ViewModel scope is marked as a viewModel", function(assert){
	var done = assert.async();

	testHelpers.load("~/test/basics/scope-vm.stache!done-autorender")
	.then(function(render){
		var doc = makeDoc();
		var context = makeContextForDocument(render, doc);
		var request = new Request("/");

		render.call(context, request);
		assert.equal(doc.body.querySelector("#hello").innerHTML, "world", "element was appended");
	})
	.then(done, function(e){
		assert.ok(false, e);
		done();
	});
});
