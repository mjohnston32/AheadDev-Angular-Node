'use strict';

// Pull in Angular from Browserify
var angular = require('angular');

// List all module dependencies
var appModules = [
    'viewNotesModule'
];

// Create myApp module with dependencies
angular.module("myApp", appModules)
    .value("api", "http://localhost:8080");

// Require dependency file from the relevant module
require('./common/dependencies');
require('./modules/viewNotes/dependencies');
