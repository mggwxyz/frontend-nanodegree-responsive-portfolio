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
                    src: ['css/**', 'js/**', 'images/fixed/**', 'index.html'],
                    dest: 'dist/'
                }]
            }
        }

    });

    //Loads npm modules for corresponding grunt tasks
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy','responsive_images']);

};
