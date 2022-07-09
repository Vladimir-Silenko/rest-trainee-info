var gulp = require('gulp');
concatCss = require('gulp-concat-css');
cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('app/'));
});