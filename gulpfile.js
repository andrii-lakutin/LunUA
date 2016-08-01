"use strict";

var gulp = require('gulp'),
stylus   = require('gulp-stylus'),
connect  = require('gulp-connect'),
concat   = require('gulp-concat');

gulp.task('connect', function() {
  connect.server({
    root: '../Lun/',                //Livereload
    port: 8080,
    livereload: true
  });
});

gulp.task('stylus', function () {
  return gulp.src(['stylus/reset.styl',
  				         'stylus/global.styl',
                   'stylus/Navigation/NumNavigation.styl',
                   'stylus/Navigation/PrevNext.styl',
                   'stylus/Steps/Step1.styl',
                   "stylus/Steps/Step2.styl",
                   'stylus/Steps/Step3.styl',
                   'stylus/Steps/Step4.styl',
                   'stylus/Result/Result.styl'])
  	.pipe(concat('build.styl'))
  	.pipe(stylus('build.css'))                        //Сборка стилей
    .pipe(gulp.dest('../Lun/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('../Lun/index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('stylus/*.styl', ['stylus']);
	gulp.watch('stylus/*/*.styl', ['stylus']);
	gulp.watch('../Lun/index.html', ['html']);
})

// default
gulp.task('default', ['html','stylus','watch','connect']);