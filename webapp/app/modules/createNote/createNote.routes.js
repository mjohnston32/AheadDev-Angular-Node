angular.module('createNoteModule')
    .config(function($stateProvider) {
        $stateProvider.state('create', {
            url: '/create',
            templateUrl: 'modules/createNote/createNote.view.html',
            controller: 'createNoteController',
            controllerAs: 'vm'
        });
    });