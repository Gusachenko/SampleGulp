'use strict';

// include gulp
var gulp = require('gulp');


// JS hint task
//npm install gulp-jshint --save-dev
var jshint = require('gulp-jshint');
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// minify HTML
//npm install gulp-minify-html --save-dev
var minifyHtml = require("gulp-minify-html");
gulp.task('minify-html', function () {
	var srcPath = "./src/*.html",
	destPath = "./build";
    gulp.src(srcPath) // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest(destPath));
});


//generate CSS from SASS
//npm install gulp-sass --save-dev
var sass = require('gulp-sass');
gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./styles/*.scss', ['sass']);
});