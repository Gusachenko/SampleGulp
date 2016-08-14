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

    return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/*.scss', ['sass']);
});




//npm install gulp-rename
//npm install --save-dev gulp-image-resize
var rename          = require("gulp-rename");
var imageResize     = require("gulp-image-resize");
var resolutionArray = [1920, 1366, 800, 480];

gulp.task("imgsToResponsive", function () {
    
  resolutionArray.forEach(function(item,i){
      
    gulp.src("./src/images/*.{jpg,png}")
    .pipe(imageResize({
      width : item
    }))
    .pipe(rename(function (path) {
      path.basename+="-"+item
    }))
    .pipe(gulp.dest("./build/images"));
      
       gulp.src("./src/images/*.{jpg,png}")
    .pipe(imageResize({
      width : item*2
    }))
    .pipe(rename(function (path) {
      path.basename+="-"+item+"-x2"
    }))
    .pipe(gulp.dest("./build/images"));
      
  });    
  
});