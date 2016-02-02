angular.module('createNoteModule')
    .controller('createNoteController', controller);

function controller(viewNotesService, routeHelper) {
    var vm = this;
    vm.saveNote = saveNote;
    vm.clearNote = clearNote;

    function saveNote() {
        var note = {
            title: vm.title,
            desc: vm.desc
        };

        viewNotesService
            .createNote(note)
            .then(function(response) {
                routeHelper.navigateTo('home');
            });
    }

    function clearNote() {
        vm.title = '';
        vm.desc = '';
    }
}