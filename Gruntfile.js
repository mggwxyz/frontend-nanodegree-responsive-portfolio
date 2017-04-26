module.exports = function(grunt){

    grunt.initConfig({

        //Task to output optimized images to use with srcset
        responsive_images: {
            dist: {
                options: {
                    //Configure grunt to use ImageMagick as graphics engine
                    engine: 'im',
                    //Configure sizes of images that are output
                    sizes: [
                        { name: 'small', width: 320 },
                        { name: 'medium', width: 640 },
                        { name: 'large', width: 1024 }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'src/images/',
                    dest: 'dist/images/'
                }]
            }
        },

        //Task to clean/delete folders/files if they exists
        clean: {
            dist: {
                src: ['dist/']
            }
        },

        //Task to create folder if it doesn't exist
        mkdir: {
            dist: {
                options: {
                    create: ['dist/']
                }
            }
        },

        //Task to copy files into a folder
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['js/**', 'images/fixed/**', 'fonts/**','index.html'],
                    dest: 'dist/'
                }]
            }
        },

        // Task to compile scss files into css
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/stylesheets/scss',
                    src: ['*.scss'],
                    dest: 'src/stylesheets/css/',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            build: {
                expand: true,
                cwd: 'src/stylesheets/css',
                src: [ '**/*.css' ],
                dest: 'src/stylesheets/css'
            }
        },

        cssmin: {
            build: {
                files: {
                    'dist/stylesheets/css/main.css': [ 'src/stylesheets/css/**/*.css' ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8080,
                    base: 'dist/',
                    hostname: '*'
                }
            }
        },

        pug: {
            build: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    'src/index.html': 'src/views/index.pug'
                }
            }
        },

        watch: {
            stylesheets: {
                files: 'src/**/*.scss',
                tasks: ['stylesheets']
            },
            pug :{
                files: 'src/**/*.pug',
                tasks: ['pug']
            }
        }

    });

    //Loads npm modules for corresponding grunt tasks
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.registerTask('stylesheets', 'Compiles the stylesheets',
        [ 'sass', 'autoprefixer', 'cssmin' ]
    );

    grunt.registerTask('build', 'Compiles all of the assets and copies the files to the dist director.',
        ['clean', 'mkdir', 'stylesheets','pug', 'copy', 'responsive_images']
    );

    grunt.registerTask('develop', 'Watches the project for changes, automatically builds them and runs a server',
        ['build', 'connect', 'watch']
    );

};
