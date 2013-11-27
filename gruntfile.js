module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    clean: {
      all: {
        src: ['.tmp', 'dist']
      }
    },
    
    concat: {
      all: {
        src: [
          'less/mixins.less',
          'less/variables.less',
          'less/*.less',
        ],
        dest: '.tmp/styles.less'
      }
    },

    less: {
      all: {
        src: '<%= concat.all.dest %>',
        dest: 'dist/styles.css'
      }
    },

    cssmin: {
      all: {
        src: '<%= less.all.dest %>',
        dest: 'dist/styles.min.css'
      }
    },

    watch: {
      all: {
        files: '<%= concat.all.src %>',
        tasks: ['default']
      }
    }

  });

  // Load plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Register task(s)
  grunt.registerTask('default', [
    'clean',
    'concat',
    'less',
    'cssmin'
  ]);

};
