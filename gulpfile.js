var gulp = require('gulp');
var minify = require('gulp-minify');
 
gulp.task('scripts', function() {
  return gulp.src(['./AngularJSEdition/rsat-pagination-aj.js'])
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('scripts1', function() {
    return gulp.src(['./WebComponentEdition/rsat-pagination.html'])
      .pipe(gulp.dest('./dist/'));
  });

gulp.task('default', [ 'scripts','scripts1']);