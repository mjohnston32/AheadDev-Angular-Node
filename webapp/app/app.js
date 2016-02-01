'use strict';

// Pull in Angular from Browserify
var angular = require('angular'),
    // List all module dependencies
    appModules = [
        'viewNotesModule'
    ];

// Create myApp module with dependencies
angular.module('noteTakingApp', appModules)
    .value('api', 'http://localhost:8080');

// Require dependency file from the relevant module
require('./modules/viewNotes/dependencies');
