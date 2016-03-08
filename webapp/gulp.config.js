module.exports = function() {
    var releaseDir = './release',
        libsCss = 'libs.css',
        libsJs = 'libs.js',
        assets = '/assets';

    var config = {
        appJs: './app/**/*.js',
        testJs: './test/**/*.js',
        releaseDir: releaseDir,
        appHtml: [
            './app/modules/**/*.html',
            './app/index.html'
        ],
        appAssets: './app/assets/**/*',
        bowerDir: './bower_components/**/*.*',
        libsJs: libsJs,
        libsCss: libsCss,
        libsDir: [
            releaseDir + '/' + libsCss,
            releaseDir + '/' + libsJs
        ],
        bowerJson: './bower.json',
        assets: assets,
        releaseAssets: releaseDir + '/' + assets
    };

    return config;
};