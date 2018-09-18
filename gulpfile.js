var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// compile, concate, minify
gulp.task('build', ['clean'], function () {
  return gulp
    .src('src/**/*.js')
    .pipe(concat('ion-google-location-autocomplete.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify().on('error', function(err) {
      gutil.log(gutil.colors.red('[Error] --> ion-google-location-autocomplete.js '), err.toString());
    }))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);