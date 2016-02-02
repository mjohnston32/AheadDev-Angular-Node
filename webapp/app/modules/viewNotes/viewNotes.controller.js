'use strict';

angular
    .module('viewNotesModule')
    .controller('viewNotesController', controller);

function controller(viewNotesService, routeHelper) {
    var vm = this;
    vm.editNote = editNote;
    vm.deleteNote = deleteNote;

    onLoad();

    function onLoad() {
        // Fetch notes
        viewNotesService
            .getAllNotes()
            .then(function (response) {
                vm.notes = response;
            });
    }

    function editNote(noteId) {
        console.log('Edit ' + noteId);

        routeHelper.navigateTo(create);
    }

    function deleteNote(noteId) {
        console.log('Delete ' + noteId);

        viewNotesService.deleteNote(noteId).then(function(response) {
            for(var i = 0; i < vm.notes.length; i++) {
                if(vm.notes[i].noteId === noteId) {
                    vm.notes.splice(i, 1); // Remove Note
                }
            }
        });
    }
}
