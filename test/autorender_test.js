var QUnit = require("steal-qunit");
var F = require("funcunit");

require("./unit");
require("./autorender-routedata_test");

F.attach(QUnit);

var makeIframe = function makeIframe(src, assert) {
	var done = assert.async();
	var iframe = document.createElement("iframe");

	window.removeMyself = function removeMyself() {
		delete window.removeMyself;
		document.body.removeChild(iframe);
		done();
	};
	document.body.appendChild(iframe);
	iframe.src = src;
};

QUnit.module("done-autorender",{
	setup: function(){
	   F.open("//basics/index.html");
	}
});

QUnit.test("basics works", function(){
	F("#hello").exists("Content rendered");
	F("#hello").text(/Hello world/, "Correct text");
	F(function(){
		var doc = F.win.document;
		QUnit.equal(doc.documentElement.getAttribute("data-attached"), "");
	});
});

QUnit.test("elements marked with data-keep are left in the DOM", function(){
	F("[name='custom-meta']").exists("meta tag left in");
	F(function() {
		var hasComment = false;
		var head = F.win.document.head;
		var child = head.firstChild;
		while(child) {
			if(child.nodeType === 8) {
				if(child.nodeValue === "autorender-keep some comment") {
					hasComment = true;
					break;
				}
			}
			child = child.nextSibling;
		}
		QUnit.equal(hasComment, true, "Comments with autorender-keep are left in.");
	})
});

QUnit.module("tags to ignore from head", {
	setup: function setup() {
		F.open("//ignore/index.html");
	}
});

QUnit.test("<base>", function(assert) {
	var done = assert.async();
	assert.expect(0);

	F("base").exists();
	F(done);
});

QUnit.module("done-autorender-no-zone",{
	setup: function(){
	   F.open("//basics/index-no-zone.html");
	}
});

QUnit.test("basics works with no zone", function(){
	F("#hello").exists("Content rendered");
	F("#hello").text(/Hello world/, "Correct text");
});

QUnit.module("development mode");

QUnit.test("the appState is available as the html viewModel", function(assert) {
	makeIframe("basics/test.html", assert);
});

// Fixes the case when can.route is not available (#5)
QUnit.module("no-route", {
	setup: function() {
		F.open("//no_route/index.html");
	}
});

QUnit.test("not using can.route works", function() {
	F("#hello").exists("Content rendered");
	F("#hello").text(/Hello world/, "Correct text");
});

QUnit.module("progressive", {
	setup: function(){
		F.open("//progressive/index.html");
	}
});

QUnit.test("are added to the bundle array", function(){
	F("#bundles").exists().text(/test\/progressive\/bar/,
							   "Normalized name is stored");
});

QUnit.module("async rendering", {
	setup: function(){
		F.open("//async/index.html");
	}
});

QUnit.test("Everything is rendered up front", function(){
	F("home-page").exists(function(){
		var thingRendered = F("#thing").size();
		QUnit.ok(thingRendered, "the #thing was added in a setTimeout but was rendered at the same time as the app because we wait for it");
	});

	F("other-page").exists();
	F("other-page .thing").size(3, "The three list items loaded from the XHR_CACHE");
});

QUnit.module("Using the xhrZone plugin", {
	setup: function(){
		F.open("//xhr/index.html");
	}
});

QUnit.test("Requests are intercepted", function(){
	F(".thing").size(2, "The ajax request was intercepted and returned a list");
});

QUnit.module("When no ViewModel is exported", {
	setup: function(){
		var harness = this;
		F.open("//no-vm/index.html", function(){
			var console = F.win.console;
			harness.errors = [];
			console.error = function(){
				harness.errors.push([].slice.call(arguments));
			};
		});

	}
});

QUnit.test("Receive a clear error message", function(){
	var message = this.errors[0][0];
	QUnit.ok(/cannot start without a ViewModel/.test(message), "Received a useful error message");
});

QUnit.module("Running in Electron", {
	setup: function(){
		F.open("//electron/index.html");
	}
});

QUnit.test("It was able to load", function(){
	F("#main").exists("template was rendered");
});

QUnit.module("Using live-reload", {
	setup: function(){
		F.open("//live-reload/page.html");
		F.wait(100);
	}
});

QUnit.test("live-reload doesn't cause double renders", function() {
	F("#result").text("worked", "Loaded without timing out");
});

QUnit.test("The new ViewModel is bound to the route", function() {
	F("#current-page").text("home", "Start on the home page");
	F("#go-to-cart").click();
	F("#current-page").text("cart", "Changed to the cart");
	F(function(){
		var hash = F.win.location.hash;
		QUnit.equal(hash, "#!cart", "now on the cart page");
	});
});

QUnit.module("optimized builds");

QUnit.test("autorender with optimized builds", function(assert) {
	makeIframe("basics-optimized/prod.html", assert);
});

QUnit.module("connectedCallback", {
	setup: function(assert) {
		F.open("//connected/index.html");
	}
});

QUnit.test("Can be used to listen to events in the DOM", function() {
	F("#increment").exists().click();
	F("#count").text("1", "connectedCallback wired up this change");
});
