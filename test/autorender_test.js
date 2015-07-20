var QUnit = require("steal-qunit");
var $ = require("jquery");
var F = require("funcunit");

F.attach(QUnit);

QUnit.module("done-autorender",{
	setup: function(){
	   F.open("//basics/index.html");
	}
});

QUnit.test("basics works", function(){
	F("#hello").exists("Content rendered");
	F("#hello").text(/Hello world/, "Correct text");
});
