module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/app.js',
                dest: 'js/app.min.js'
            }
        },

        jslint: { // configure the task
            files: [ // some example files
                'app/js/*'
            ],
            exclude: [
                '**/ignore-*.js'
            ],
            directives: { // example directives
                browser: true,
                unparam: true,
                todo: true,
                predef: [ // array of pre-defined globals
                    '$'
                ]
            },
            options: {
                junit: 'out/junit.xml', // write the output to a JUnit XML
                log: 'out/lint.log',
                jslintXml: 'out/jslint_xml.xml',
                errorsOnly: true, // only display errors
                failOnError: false, // defaults to true
                shebang: true, // ignore shebang lines
                checkstyle: 'out/checkstyle.xml' // write a checkstyle-XML
            }
        },
        manifest: {
            generate: {
                options: {
                    basePath: "",
                    cache: [],
                    exclude: [],
                    fallback: [],
                    preferOnline: false,
                    verbose: true,
                    timestamp: true
                },
                src: [
                    "app/*.html",
                    "app/*.ico",
                    "app/*.mp3",
                    "app/*.png",
                    "app/img/*.svg",
                    "app/img/*.png",
                    "app/js/lib/*.js",
                    "app/js/*.min.js",
                    "app/css/app.css"
                ],
                dest: "origo.manifest"
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-jslint');

    grunt.loadNpmTasks('grunt-manifest');

    // Default task(s).
    grunt.registerTask('default', ['uglify','manifest','jslint']);

};
