module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            estilo: {
                files: 'app/css/**/*.scss',
                tasks: 'sass',
                options: {
                    livereload: 9696
                }
            },
            html: {
                files: 'app/jade/**/*.jade',
                tasks: 'jade',
                options: {
                    reload: true
                }
            },
            script: {
                files: 'app/script/**/*.js',
                tasks: 'uglify',
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/main.css': 'app/css/main.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    src: ["*.jade", "!template.jade"],
                    dest: "dist/",
                    ext: ".html",
                    cwd: "app/jade",
                    expand: true
                }]
            }
        },
        uglify: {
            dist: {
                files: [{
                    src: ["**/*.js"],
                    dest: "dist/script",
                    ext: ".js",
                    cwd: "app/script",
                    expand: true
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};