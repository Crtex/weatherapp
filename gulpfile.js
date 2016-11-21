var gulp = require('gulp')
concat = require('gulp-concat')
watch = require('gulp-watch');

gulp.task('default', function () {
  return gulp.src([
    './node_modules/angular/angular.min.js',
    './node_modules/angular-route/angular-route.min.js',
    './js/src/**/*.js'
  ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./js/build'));
});

gulp.task('watch', function () {
  watch('./js/src/**/*.js', function () {
    gulp.src([
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.min.js',
      './js/src/**/*.js'
    ])
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./js/build'));
      console.log('built');
  })
});