var QUnit = require("steal-qunit");
var $ = require("jquery");
var F = require("funcunit");

F.attach(QUnit);

QUnit.module("done-autorender",{
	setup: function(){
		$("#qunit-fixture").html(
			$("<iframe src='progressive.html' name='f'></iframe>")
		);
	}
});



QUnit.test("basics works", function(){
	F("order-history", "f").exists("order-history element is on the page");
	F("[asset-id]", "f").size(2, "There are 2 style tags on the page");
});
