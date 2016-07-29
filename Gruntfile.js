module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		json : grunt.file.readJSON('source/js/variable.json'),
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    trace: true
                },
                files: {
                    '<%= pkg.directories.css %>/style.min.css': '<%= pkg.directories.sass %>/style.sass'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= pkg.directories.css %>/style.min.css': '<%= pkg.directories.sass %>/style.sass'
                }
            }
        },
        import: {
            dist: {
                options: {},
                files: {
                    '<%= pkg.directories.js %>/script.js' : '<%= pkg.directories.js_dev %>/script.js'
                },
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '<%= pkg.directories.js %>/script.min.js': ['<%= pkg.directories.js %>/script.js']
                }
            }
        },
        liquid: {
            options: {
                includes: '<%=pkg.directories.includes%>',
				data :'<%=json%>'
            },
            pages: {
                files: [
                    { expand: true, flatten: true, src: '<%=pkg.directories.templates%>/*.liquid', dest: '<%= pkg.directories.static %>', ext: '.html' }
                ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 10 versions', 'ie 8', 'ie 9'],
                map: true,
            },
            default: {
                src: '<%= pkg.directories.css %>/*.css',
            },
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['<%= pkg.directories.sass %>/**/*.sass'],
                tasks: ['sass:dist','autoprefixer']
            },
            import: {
                files: ['<%= pkg.directories.js_dev %>/*.js'],
                tasks: ['import']
            },
            uglify: {
                files: ['<%= pkg.directories.js_dev %>/*.js'],
                tasks: ['uglify']
            },
            liquid: {
                files: ['<%=pkg.directories.templates%>/*.liquid', '<%=pkg.directories.templates%>/includes/*.liquid','<%=pkg.directories.templates%>/**/*.liquid',
				'source/js/variable.json'],
                tasks: ['liquid']
            }
        }
    });
    /* Load Task(s) */
    require('load-grunt-tasks')(grunt);
    /* Register Task(s) */
    grunt.registerTask('default', ['liquid', 'sass', 'import','uglify']);

}
