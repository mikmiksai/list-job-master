"use strict";

const { series, src, watch, dest} = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

sass.compiler = require('dart-sass');

//Sass Task
let scssTask = () => {
    let plugins = [
        autoprefixer({
            browsers: ['last 4 version', 'ie >= 8', 'edge >= 15']
        }),
        cssnano()
    ];
    return src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(dest('./src/dist', { sourcemaps: '.'}));
}

let watchTask = () => {
    watch(['./src/sass/**/*.scss'], series(scssTask));
}

exports.default = series(scssTask, watchTask);