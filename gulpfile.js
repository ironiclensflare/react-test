"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var condense = require('gulp-css-condense');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var reactify = require('reactify');
var browserify = require('browserify');

var config = {
    vendorJs: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ],
    vendorCss: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
    siteJs: ['src/js/**/*.js'],
    siteCss: ['src/css/**/*.css']
};

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('vendorjs', function () {
    return gulp.src(config.vendorJs)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('vendorcss', function () {
    return gulp.src(config.vendorCss)
        .pipe(concat('vendor.css'))

        .pipe(gulp.dest('dist/css'));
});

gulp.task('sitejs', function () {
    return gulp.src(config.siteJs)
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sitecss', function () {
    return gulp.src(config.siteCss)
        .pipe(concat('site.css'))
        .pipe(condense())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['vendorjs', 'vendorcss', 'sitejs', 'sitecss']);