var gulp = require('gulp');

var concat 	= require('gulp-concat');
var uglify  = require('gulp-uglify');


//DEFINE TASK
//============
//our first task
gulp.task('js', function() {
	//source files
	gulp.src('js/**/*.*')
	 //proccess
	.pipe(concat('build.js'))
	.pipe(uglify())
	//files dest
	.pipe(gulp.dest('dist/js'))
});


