module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    
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
        } 
    });

    grunt.registerTask('default', ["jshint"]);

};