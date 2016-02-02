angular.module('viewNotesModule')
    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'release/modules/viewNotes/viewNotes.view.html'
        });
});