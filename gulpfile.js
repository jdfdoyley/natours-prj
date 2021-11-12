'use strict';

const { src, dest, watch } = require('gulp');
const { sync, logError } = require('gulp-sass')(require('sass'));

const css = () => {
  return src('./src/sass/app.scss')
  .pipe(sync({ outputStyle: 'compressed' }).on('error', logError))
  .pipe(dest('./dist/css'));
};

exports.default = () => {
  watch('./src/sass/app.scss', css);
};