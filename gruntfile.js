module.exports = function(grunt) {


  grunt.initConfig({

    watch: {
      livereload: {
        files: [],
        options: { livereload: true }
      },

      uglify: {
        files: ['app/**/*.js'],
        tasks: ['uglify']
      },

      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },

      stylus: {
        files: ['app/**/*.styl'],
        tasks: ['stylus:compile']
      }
    },


    stylus: {
      compile: {
        files: [{
          expand: true,
          flatten: true,
          compress: false,
          //cwd: "app/stylus",
          src: 'app/stylus/app.styl',
          dest: './build',
          ext: '.css'
        }]
      }
    },


    jade: {
      compile: {
        options: {
          pretty: false
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: 'app',
          src: ['**/*.jade'],
          dest: './build/templates',
          ext: '.html'
        },{
          expand: true,
          cwd: 'app',
          src: ['index.jade'],
          dest: './build',
          ext: '.html'
        }]
      }
    },


    uglify: {
      dev: {
        options: {
          mangle: false,
            beautify: true,
            preserveComments: true,
            compress: {
            drop_debugger : false
          },
          sourceMap: false
        },
        files: {
          './build/311.min.js': [
            //'./app/main.js',
            './app/**/*.js'
          ]
        }
      }
    }


  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');



  grunt.registerTask('build', ['stylus', 'jade:compile', 'uglify', 'watch']);

};
