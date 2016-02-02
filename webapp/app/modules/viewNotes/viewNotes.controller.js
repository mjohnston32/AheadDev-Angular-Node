'use strict';

angular
    .module('viewNotesModule')
    .controller('viewNotesController', controller);

function controller(viewNotesService) {
    var vm = this;

    viewNotesService
        .getAllNotes()
        .then(function(response)
            {
                vm.notes = response
            });
}
