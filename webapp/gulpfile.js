(function() {
    // Build Runner
    var gulp = require('gulp'),
        config = require('./gulp.config')(),
        del = require('del');

    // Module Handler (CommonJS / Node)
    var browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        debowerify = require('debowerify'),
        mainBowerFiles = require('gulp-main-bower-files'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        util = require('gulp-util'),
        filter = require('gulp-filter'),
        csso = require('gulp-csso'),
        browserSync = require('browser-sync').create();;

    var argv = require('yargs').argv;

    // Quality tools
    var jscs = require('gulp-jscs'),
        jshint = require('gulp-jshint');

    // Build project to release directory
    gulp.task('compile', ['compileJs', 'copyHtml', 'copyAssets', 'compileLibs'], function() {});

    // Watch for changes
    gulp.task('watch', function() {
        browserSync.init({
            server: "./release"
        });

        gulp.watch(config.appJs, ['compileJs']).on('change', browserSync.reload);
        gulp.watch(config.appHtml, ['copyHtml']).on('change', browserSync.reload);
        gulp.watch(config.appAssets, ['copyAssets']).on('change', browserSync.reload);
        gulp.watch(config.bowerDir, ['compileLibs']).on('change', browserSync.reload);
    });

    // Code quality check (style)
    gulp.task('jscs', function() {
        gulp.src([config.appJs, config.testJs])
            .pipe(jscs())
            .pipe(jscs.reporter())
            .pipe(jscs.reporter('fail'));
    });

    // needs fixed
    gulp.task('lint', function() {
        gulp.src([config.appJs, config.testJs])
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

    gulp.task('cleanHtml', function() {
        del(['./app/modules/**/*.html', './app/index.html']);
    });

    gulp.task('copyHtml', ['cleanHtml'], function() {
        gulp.src(['./app/modules/**/*.html'], {base: 'app'})
            .pipe(gulp.dest(config.releaseDir));

        // Copy index file
        gulp.src(['./app/index.html'])
            .pipe(gulp.dest(config.releaseDir));
    });

    gulp.task('cleanJs', function() {
        del(['./release/app.js']);
    });

    gulp.task('compileJs', ['cleanJs'], function() {
        // Browserify (concat) files and fix bower dependencies
        var bundler = browserify({basedir:'./app', debug: true})
            .add('app.js')
            .transform(debowerify);

        // Copy files to release directory
        return bundler.bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest(config.releaseDir));
    });

    gulp.task('cleanAssets', function() {
        del([config.releaseAssets]);
    });

    gulp.task('copyAssets', ['cleanAssets'], function() {
        // Copy assets
        gulp.src([config.appAssets], {base: 'app/assets'})
            .pipe(gulp.dest(config.releaseAssets));
    });

    gulp.task('cleanLibs', function() {
        del(config.libsDir);
    });

    gulp.task('compileLibs', ['cleanLibs'], function() {
        var bowerJs = filter('**/*.js');
        gulp.src(config.bowerJson)
            .pipe(mainBowerFiles())
            .pipe(bowerJs)
            .pipe(uglify().on('error', util.log))
            .pipe(concat(config.libsJs))
            .pipe(gulp.dest(config.releaseDir));

        gulp.src('./bower_components/**/*.css')
            .pipe(concat(config.libsCss))
            .pipe(csso())
            .pipe(gulp.dest(config.releaseDir));
    });
}());