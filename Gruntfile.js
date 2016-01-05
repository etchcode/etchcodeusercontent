module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    var ETCH_FILES = ["play/etch.js"];

    grunt.initConfig({
        jshint: {
            etch: ETCH_FILES
        },
        watch: {
            etch: {
                files: ETCH_FILES,
                tasks: ["jshint:etch"],
                options: {spawn: false}
            }
        },
        gae: {
            deploy: {
                action: "update",
            }
        }
    });
    grunt.registerTask("deploy", ["gae:deploy"]);

    grunt.registerTask('default', ["jshint"]);
};
