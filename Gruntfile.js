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

    watch: {
      jshint: {
        files: ['app/javascripts/**/*.js', 'test/**/*.js'],
        tasks: ['jshint'],
      },
      karma: {
        files: ['app/javascripts/**/*.js', 'test/**/*.js'],
        tasks: ['karma:watch:run'],
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
         script: 'server.js'
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
        reporter: require('jshint-stylish')
      }
    }  
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', ['express:dev', 'reload', 'karma:watch:start', 'watch']);
  grunt.registerTask('test', ['karma:unit']);
};
