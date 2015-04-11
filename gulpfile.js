var gulp = require('gulp');

var concat 	= require('gulp-concat');
var uglify  = require('gulp-uglify');
var stylus 	= require('gulp-stylus');

//DEFINE TASKS
//============
//js task
gulp.task('js', function() {
	//source files
	gulp.src('js/**/*.*')
	 //proccess
	.pipe(concat('build.js'))
	.pipe(uglify())
	//files dest
	.pipe(gulp.dest('dist/js'))
});

//Stylus task
gulp.task('style', function() {
	gulp.src('styles/**/*.*')
	.pipe(stylus({
		//compress stylus
		compress: true
		}))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('dist/'));
})

