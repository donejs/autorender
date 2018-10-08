var QUnit = require("steal-qunit");
var F = require("funcunit");

F.attach(QUnit);

QUnit.module("route-data attribute - default route.data", {
	setup: function(){
	   F.open("//routedata/index.html");
	}
});

QUnit.test("Attaches to the route", function() {
	F("h1").exists().text("fromVM", "Content rendered from the ViewModel");
	F("h2").text("fromRoute", "Content rendered from the route");
});


QUnit.module("route-data attribute - custom type", {
	setup: function(){
	   F.open("//routedata-type/index.html");
	}
});

QUnit.test("Attaches to the route", function() {
	F("h1").text("fromVM", "Content rendered from the ViewModel");
	F("h2").text("fromRoute", "Content rendered from the route");
	F("h3").text("Wilbur", "Gets other properties");
});
