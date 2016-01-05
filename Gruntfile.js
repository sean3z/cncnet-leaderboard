module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        clean: ['dist'],

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**', '!**/sass/**'],
                    dest: 'dist/'
                }]
            }
        },

        sass: {
            dev: {
                options: {
                    sourcemap: 'none',
                    style: 'compact'
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/sass',
                    src: ['*.scss'],
                    dest: 'dist/assets/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            dev: {
                files: ['src/**'],
                tasks: ['copy', 'sass:dev', 'injector:dev']
            }
        },

        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    ignore: [__dirname]
                }
            }
        },

        concurrent: {
            dev: {
                tasks: ['watch:dev', 'nodemon:dev'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        injector: {
            options: {
                ignorePath: 'src/'
            },
            dev: {
                files: {
                    'dist/index.html': [
                        ['src/assets/js/modules/**/*.module.js'],
                        ['src/assets/js/modules/**/*.js']
                    ],
                }
            }
        },

        mocha_istanbul: {
            server: {
                options: {
                    reporter: 'spec',
                    require: './test/helpers/spec-helper'
                },
                src: ['test/server/**/*.spec.js']
            }
        }
    });

    grunt.registerTask('build', ['clean', 'copy', 'sass:dev', 'injector:dev']);
    grunt.registerTask('serve', ['clean', 'copy', 'sass:dev', 'injector:dev', 'concurrent:dev']);
    grunt.registerTask('test', ['mocha_istanbul:server'])
};
