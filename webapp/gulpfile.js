(function() {
    var gulp = require('gulp');
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');
    var debowerify = require('debowerify');

    gulp.task('compile:debug', function() {
        var bundler = browserify({basedir:'./app', debug: true})
            .add('app.js')
            .transform(debowerify);

        return bundler.bundle()
            .pipe(source('release.js'))
            .pipe(gulp.dest('./app'));
    });

    gulp.task('compile:release', function() {
        var bundler = browserify({basedir:'./app', debug: false})
            .add('app.js')
            .transform(debowerify);

        return bundler.bundle()
            .pipe(source('release.js'))
            .pipe(gulp.dest('./app'));
    });

    gulp.task('watch', function() {
        gulp.watch('./app/**/*.js', ['compile:debug'])
    })

}());