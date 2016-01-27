'use strict';

angular
    .module("viewNotesModule")
    .controller("viewNotesController", controller);

function controller($http, api, hello) {
    var vm = this;

    $http.get(api + '/api/notes')
    .success(function(response) {
        vm.notes = response;
    });
}