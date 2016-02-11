module.exports = function(grunt){

    grunt.initConfig({

        //Task to output optimized images to use with srcset
        responsive_images: {
            dev: {
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
                    cwd: 'src/images_src/',
                    dest: 'src/images/'
                }]
            }
        },

        //Task to clean/delete folders/files if they exists
        clean: {
            dev: {
                src: ['src/images/']
            }
        },

        //Task to create folder if it doesn't exist
        mkdir: {
            dev: {
                options: {
                    create: ['src/images/']
                }
            }
        },

        //Task to copy files into a folder
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/images_src/fixed/',
                    src: '**',
                    dest: 'src/images'
                }]
            },
        }

    });

    //Loads npm modules for corresponding grunt tasks
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
