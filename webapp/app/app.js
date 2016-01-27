(function() {
    'use strict';

    angular.module("myApp", ["viewNotesModule"])
        .value("api", "http://localhost:8080");
}());