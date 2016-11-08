var gulp = require('gulp'),
    notify = require('gulp-notify'),
    nodemon = require('gulp-nodemon');


gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'lma___bot.js',
    watch: ['lma___bot.js']
  })
    .on('start', function onStart() {
      if (!called) { cb(); }
      called = true;
    })
});


gulp.task('default', ['nodemon'], function() {
    gulp.start();
});