'use strict';

// Pull in Angular from Browserify
var angular = require('angular'),
    // List all module dependencies
    appModules = [
        'viewNotesModule',
        'ui.router',
        'createNoteModule',
        'commonModule'
    ];

// Create myApp module with dependencies
angular.module('noteTakingApp', appModules)
    .value('api', 'http://localhost:8080')
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

// Angular Required Libs
require('angular-ui-router');

// Require dependency file from the relevant module
require('./modules/common/common.dependencies');
require('./modules/viewNotes/viewNotes.dependencies');
require('./modules/createNote/createNote.dependencies');

