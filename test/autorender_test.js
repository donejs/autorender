var QUnit = require("steal-qunit");
var $ = require("jquery");
var F = require("funcunit");

F.attach(QUnit);

QUnit.module("production", {
	setup: function(){
		F.open("//basics/prod.html");
	}
});

QUnit.test("isProduction helper works", function(){
	F("#hi-prod").exists("a div inside of isProduction was rendered");
});

// Only Production mode is supported in IE8.
if(/MSIE 8/.test(navigator.userAgent)) {
	return;
}

QUnit.module("done-autorender",{
	setup: function(){
	   F.open("//basics/index.html");
	}
});

QUnit.test("basics works", function(){
	F("#hello").exists("Content rendered");
	F("#hello").text(/Hello world/, "Correct text");
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
});
