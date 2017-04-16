'use strict';

// include gulp
var gulp = require('gulp');


// JS hint task
//npm install gulp-jshint --save-dev
var jshint = require('gulp-jshint');
gulp.task('jshint', function() {
  gulp.src('./app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// minify HTML
//npm install gulp-minify-html --save-dev
var minifyHtml = require("gulp-minify-html");
gulp.task('minify-html', function () {
	var srcPath = "./app/*.html",
	destPath = "./dist";
    gulp.src(srcPath) // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest(destPath));
});


//generate CSS from SASS
//npm install gulp-sass --save-dev
//npm install autoprefixer
//npm install --save-dev gulp-postcss
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    var processors = [
        autoprefixer({ 
            browsers: ["> 0%"]
        })
    ];

    return gulp.src('./app/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/styles/*.scss', ['sass']);
});




//npm install gulp-rename
//npm install --save-dev gulp-image-resize
const imagemin      = require('gulp-imagemin');
var rename          = require("gulp-rename");
var imageResize     = require("gulp-image-resize");
var resolutionArray = [192, 256];

gulp.task("imgsToResponsive", function () {
    
  resolutionArray.forEach(function(item,i){
      
    gulp.src("./app/images/*.{jpg,png}")
    .pipe(imagemin())
    .pipe(imageResize({
      width : item
    }))
    .pipe(rename(function (path) {
      path.basename+="-"+item
    }))
    .pipe(gulp.dest("./dist/images"));
      
    gulp.src("./app/images/*.{jpg,png}")
      .pipe(imagemin())
      .pipe(imageResize({
          width : item*2
        }))
      .pipe(rename(function (path) {
          path.basename+="-"+item+"-x2"
      }))
      .pipe(gulp.dest("./dist/images"));
  });    
  
});

const clean = require('gulp-clean');
//
gulp.task('clean-dist', function () {
    return gulp.src(['./dist/*', '!./dist/vendor'], {read: false})
        .pipe(clean());
});