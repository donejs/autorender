var template = require("lodash.template");
var fs = require("fs");

function buildTemplate(fileName){

	var str = fs.readFileSync(__dirname + "/src/" + fileName + ".txt");

	var fn = template(str);

	var out = "def" + "ine([], function(){\n" +
		"\treturn " + fn.source +
		"\n});";

	fs.writeFileSync(__dirname + "/src/" + fileName + ".js", out, "utf8");
}

buildTemplate('template');
buildTemplate('template-no-zone');