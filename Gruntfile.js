
module.exports = function(grunt){

	grunt.initConfig({
		copy: {
			toTest: {
				files: [{
					expand: true,
					src:["node_modules/can/**"],
					dest: "test/",
					filter: "isFile"
				}, {
					expand: true,
					src:["node_modules/jquery/**"],
					dest: "test/",
					filter: "isFile"

				}, {
					expand: true,
					src: ["node_modules/steal/**"],
					dest: "test/",
					filter: "isFile"
				}]
			}

		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["copy"]);
};
