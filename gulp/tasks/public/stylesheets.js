import gulp from 'gulp';
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssBrowserReporter from 'postcss-browser-reporter'
import postcssCssnext from 'postcss-cssnext'
import postcssImport from 'postcss-import'
import postcssReporter from 'postcss-reporter'
import postcssUrl from 'postcss-url'

import config from '../../config';
import handleErrors from '../../util/handle-errors';

var stylesheetsConfig = config.public.stylesheets;
var sassConfig = config._sass;
var autoprefixerConfig = config._autoprefixer;


gulp.task('public:stylesheets', () => {
  return gulp.src(stylesheetsConfig.src)
    .pipe(sass(sassConfig.options))
    .on('error', handleErrors)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer(autoprefixerConfig.options),
      postcssBrowserReporter(),
      postcssCssnext(),
      postcssImport(),
      postcssReporter(),
      postcssUrl()
    ]))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(stylesheetsConfig.dest));
});

gulp.task('public:stylesheets:production', () => {
  return gulp.src(stylesheetsConfig.src)
    .pipe(sass(sassConfig.options))
    .on('error', handleErrors)
    .pipe(postcss([
      autoprefixer(autoprefixerConfig.options),
      cssnano(),
      postcssBrowserReporter(),
      postcssCssnext(),
      postcssImport(),
      postcssReporter(),
      postcssUrl()
    ]))
    .on('error', handleErrors)
    .pipe(gulp.dest(stylesheetsConfig.dest));
});
