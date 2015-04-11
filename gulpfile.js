var gulp = require('gulp');

var concat 	= require('gulp-concat');
var uglify  = require('gulp-uglify');
var stylus 	= require('gulp-stylus');
var htmlmin = require('gulp-htmlmin');

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

//HTML Task
gulp.task('html', function(){
	gulp.src('index.html')
	.pipe(htmlmin({
		collapseWhitespace: true,
		removeComments: true,
		minifyURLs: true,
		minifyJS: true
		}))
	.pipe(gulp.dest('dist'));
	});

//Run tasks when do changes in files
gulp.task('watch', function(){
	gulp.watch('js/**/*.*',['js']);
	gulp.watch('styles/**/*.*',['style']);
	gulp.watch('index.html',['html']);
});

//Default task
gulp.task('default', ['watch']);

//join tasks
gulp.task('minify', ['html', 'style', 'js']);