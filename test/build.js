var stealTools = require("steal-tools");

stealTools.build({
	config: __dirname + "/../package.json!npm",
	main: "test/basics/index.stache!done-autorender"
}, {
	dest: "test/basics/dist",
	quiet: true,
	minify: false
});
