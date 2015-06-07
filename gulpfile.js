var gulp = require('gulp');
var webpack = require('gulp-webpack');

/**
 * Builds JS files for dev work
 */
gulp.task('webpack-dev', function(){
	return gulp.src('./app/main.js')
		.pipe(webpack(require('./webpack/dev.config')))
		.pipe(gulp.dest('app/build/js/'));
});

/**
 * Builds JS files for prod
 */
gulp.task('webpack-prod', function(){
	return gulp.src('./app/main.js')
		.pipe(webpack(require('./webpack/prod.config')))
		.pipe(gulp.dest('app/build/js'));
});

gulp.task('default', ['webpack-prod']);
gulp.task('dev', ['webpack-dev']);
