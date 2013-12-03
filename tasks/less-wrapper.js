module.exports = function(grunt) {
  grunt.registerMultiTask('less_wrapper', 'Sandbox your styles with a wrapper class', function() {
    var wrapperClass = this.data.wrapper;
    if(wrapperClass) {
      this.files.forEach(function(file) {
        grunt.log.writeln('Sandboxing styles with ".' + wrapperClass + '"');
        var contents = file.src.filter(function(path) {
          if(!grunt.file.exists(path)) {
            grunt.log.warn('Source file "' + path + '" does not exist.');
            return false;
          }
          return true;
        }).map(grunt.file.read);

        grunt.file.write(file.dest, [
          '.' + wrapperClass + ' {', contents, '}'
        ].join(grunt.util.linefeed));
      });
    } else {
      grunt.log.writeln('Leaving styles in the global namespace (no wrapper class).');
    }
  });
};
