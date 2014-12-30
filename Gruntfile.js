module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      watch: {
        background: true
      },
      unit: {
        singleRun: true
      }
    },

    originalWatch: {
      karma: {
        files: ['app/javascripts/**/*.js', 'test/**/*.js'],
        tasks: ['jshint', 'karma:watch:run'],
        options: {
          livereload: true
        }
      }
    },

    express: {
      options: {
      },

      dev: {
        options: {
          script: 'app.js'
        }
      }
    },

    reload: {
      port: 6001,
      proxy: {
        host: 'localhost',
        port: 3000
      }
    },

    jshint: {
      files: ['app/javascripts/**/*.js', '!app/javascripts/external/*.js', 'test/specs/*.js'],
      options: {
          globals: {
            module: true
          }
      }
    }  
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-jshint');
    
  grunt.renameTask('watch', 'originalWatch');

  grunt.registerTask('watch', ['express:dev', 'reload', 'karma:watch:start', 'originalWatch']);
  grunt.registerTask('test', ['karma:unit']);
};
