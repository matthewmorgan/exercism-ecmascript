"use strict";
var $__0,
    $__2,
    $__4;
$traceurRuntime.options.symbols = true;
function getInputDirectory(argv) {
  if (argv.input) {
    return argv.input;
  }
  return '.';
}
function getOutputDirectory(argv) {
  if (argv.output) {
    return argv.output;
  }
  return 'traceur-output';
}
var gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    traceur = require('gulp-traceur'),
    del = require('del'),
    argv = require('yargs').argv,
    inputDir = getInputDirectory(argv),
    outputDir = getOutputDirectory(argv);
gulp.task('default', ['test']);
gulp.task('test', ['traceur', 'copy-runtime'], $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    return ($__0 = gulp.src([outputDir + '/*_test.spec.js']), $traceurRuntime.continuation($__0.pipe, $__0, [jasmine()]));
  }, this, arguments);
}));
gulp.task('traceur', $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    return ($__2 = gulp.src([inputDir + '/*.js']).pipe(traceur({
      modules: 'commonjs',
      properTailCalls: true,
      symbols: true,
      annotations: true,
      arrayComprehension: true,
      asyncFunctions: true,
      asyncGenerators: true,
      exponentiation: true,
      exportFromExtended: true,
      forOn: true,
      generatorComprehension: true,
      memberVariables: true,
      require: true,
      types: true
    })), $traceurRuntime.continuation($__2.pipe, $__2, [gulp.dest(outputDir)]));
  }, this, arguments);
}));
gulp.task('copy-runtime', $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    return ($__4 = gulp.src(traceur.RUNTIME_PATH), $traceurRuntime.continuation($__4.pipe, $__4, [gulp.dest(outputDir)]));
  }, this, arguments);
}));
gulp.task('clean', function(cb) {
  del([outputDir], cb);
});
