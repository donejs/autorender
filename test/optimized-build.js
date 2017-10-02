var path = require("path");
var stealTools = require("steal-tools");

stealTools.optimize({
	config: path.join(__dirname, "..", "package.json!npm"),
	main: "test/basics-optimized/index.stache!done-autorender",
}, {
	dest: "test/basics-optimized/dist",
	quiet: true,
	minify: false
});
