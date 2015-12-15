import gulp from 'gulp';

import config from '../../config';

var jsConfig = config.server.javascripts;
var viewsConfig = config.server.views;
var testConfig = config.server.test;
var lintConfig = config.server.lint;


gulp.task('server:develop', [
  'server:build',
  'server:test',
  'server:lint'
], () => {
  gulp.watch([jsConfig.src], ['server:javascripts', 'server:test']);
  gulp.watch([viewsConfig.src], ['server:views']);
  gulp.watch([testConfig.src], ['server:test']);
  gulp.watch([lintConfig.src], ['server:lint']);
});
