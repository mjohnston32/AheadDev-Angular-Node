(function() {
    // Build Runner
    var gulp = require('gulp');
    var del = require('del');

    // Module Handler (CommonJS / Node)
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');

    // Relies on bower rather than node for dependencies
    var debowerify = require('debowerify');

    var argv = require('yargs').argv;

    // Quality tools
    var jscs = require('gulp-jscs');
    var jshint = require('gulp-jshint');

    // Compile project, pull in all assets and html file
    var compile = function(debug) {
        // Clean directory
        del.sync('./release/**');

        // Copy assets
        gulp.src(['./app/assets/**/*'], {base: 'app/assets'})
            .pipe(gulp.dest('./release/assets'));

        gulp.src(['./app/modules/**/*.html'], {base: 'app'})
            .pipe(gulp.dest('./release'));

        // Copy index file
        gulp.src(['./app/index.html'])
            .pipe(gulp.dest('./release'));

        // Browserify (concat) files and fix bower dependencies
        var bundler = browserify({basedir:'./app', debug: debug})
            .add('app.js')
            .transform(debowerify);

        // Copy files to release directory
        return bundler.bundle()
            .pipe(source('release.js'))
            .pipe(gulp.dest('./release'));
    };

    // Build project to release directory
    gulp.task('compile', function() {
        var debug = !(argv.debug === undefined);
        return compile(debug);
    });

    // Build project as debug. Needed for Watcher
    gulp.task('dev-compile', function() {
        return compile(true);
    });

    // Watch for changes
    gulp.task('watch', function() {
        gulp.watch(['./app/**/*.js', './app/**/*.html'], ['dev-compile']);
    });

    // Code quality check (style)
    gulp.task('jscs', function() {
        gulp.src(['./app/**/*.js', './test/**/*.js'])
            .pipe(jscs())
            .pipe(jscs.reporter())
            .pipe(jscs.reporter('fail'));
    });

    // needs fixed
    gulp.task('lint', function() {
        gulp.src(['./app/**/*.js', './test/**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

}());