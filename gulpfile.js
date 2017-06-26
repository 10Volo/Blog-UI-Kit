var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn');
	minify = require('gulp-minify-css');
	rename = require('gulp-rename');

// Запуск локального сервера
gulp.task('connect', function() {
	connect.server({
    	root: 'app',
    	livereload: true,
    	port: 8888
    });
	opn('http://localhost:8888');
});

// HTML
gulp.task('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

//CSS
gulp.task('css', function () {
	gulp.src('./app/css/*.css')
        .pipe(minify({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

//JS
gulp.task('js', function () {
	gulp.src('./app/js/*.js')
    	.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);