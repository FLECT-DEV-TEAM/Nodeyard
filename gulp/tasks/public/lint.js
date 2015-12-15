import gulp from 'gulp';
import esLint from 'gulp-eslint';

import config from '../../config';

var lintConfig = config.public.lint;


gulp.task('public:lint', () => {
  return gulp.src(lintConfig.src)
    .pipe(esLint())
    .pipe(esLint.format());
});
