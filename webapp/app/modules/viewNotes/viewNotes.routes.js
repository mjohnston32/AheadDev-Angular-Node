angular.module('viewNotesModule')
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'modules/viewNotes/viewNotes.view.html'
        });
});