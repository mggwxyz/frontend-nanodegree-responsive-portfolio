module.exports = function(grunt){

    //Loads npm modules for corresponding grunt tasks
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTask('grunt-contrib-clean');
    grunt.loadNpmTask('grunt-contrib-copy');
    grunt.loadNpmTask('grunt-mkdir');

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
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            }
        },

        //Task to clean/delete folders/files if they exists
        clean: {
            dev: {
                src: ['images']
            }
        },

        //Task to create folder if it doesn't exist
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                }
            }
        },

        //Task to copy files into a folder
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'images/'
                }]
            },
        }
        
    });
};
