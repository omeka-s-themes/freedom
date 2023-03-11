'use strict';

var gulp = require('gulp');

gulp.task('css', function () {
    var sass = require('gulp-sass')(require('sass'));
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./asset/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/sass']
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./asset/css'));
});

gulp.task('css:watch', function () {
    gulp.watch('./asset/sass/**/*.scss', gulp.parallel('css'));
});

gulp.task('default', gulp.series('css:watch'));
