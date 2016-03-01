
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

var b = browserify({
  entries: ["./src/modal-app"],
  transform: [babelify],
  debug: true
});

b.bundle()
  .on('error', function(err) { 
    console.log('ERROR ' + err.message);
  })
  .pipe(fs.createWriteStream('main.js'));
