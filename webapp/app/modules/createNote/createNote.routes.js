angular.module('createNoteModule')
    .config(function($stateProvider) {
        $stateProvider.state('create', {
            url: '/create',
            templateUrl: 'release/modules/createNote/createNote.view.html',
            controller: 'createNoteController',
            controllerAs: 'vm'
        });
    });