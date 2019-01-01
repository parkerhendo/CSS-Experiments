const gulp = require('gulp');
const connect = require('gulp-connect');
// const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('connect', () => {
  connect.server({
    livereload: true,
  });
});
