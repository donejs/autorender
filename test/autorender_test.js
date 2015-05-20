var QUnit = require("steal-qunit");
var F = require("funcunit");

F.attach(QUnit);

QUnit.module("done-autorender",{
	setup: function(){
		F.open("//progressive.html");
	}
});



QUnit.test("basics works", function(){
	F("order-history").exists("order-history element is on the page");
	F("[asset-id]").size(2, "There are 2 style tags on the page");
});
