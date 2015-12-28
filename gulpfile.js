var gulp = require('gulp');
var minFiles = {};
gUtil = require('gulp-util');
gMinify = require('gulp-minify');
gMinifyCss = require('gulp-minify-css');
gConcat = require('gulp-concat');

gulp.task('packHtml', function() {
	gulp.src('*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('packCss', function() {
	gulp.src('*.css')
		.pipe(gConcat("all.css"))
		.pipe(gMinifyCss())
		.pipe(gulp.dest("dist"));
});

gulp.task('packJs', function() {
	gulp.src('*.js')
		.pipe(gConcat('all.js'))
		.pipe(gMinify())
		.pipe(gulp.dest('dist'));
});

var replace = require('gulp-replace');
gulp.task('regexp', function() {
	gulp.src(['index.html'])
		.pipe(replace(/<magda>([\s\S]*)<\/magda>/,''))
		.pipe(replace(/<!--/g,''))
		.pipe(replace(/-->/g,''))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['packHtml', 'packCss','packJs']);
