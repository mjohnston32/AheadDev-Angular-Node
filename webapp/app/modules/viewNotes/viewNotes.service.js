angular.module('viewNotesModule')
    .service('viewNotesService', service);

function service($http, $q, api) {

    var service = this;
    service.getAllNotes = getAllNotes;
    service.createNote = createNote;

    function getAllNotes() {
        var deferred = $q.defer();

        $http
            .get(api + '/api/notes')
            .success(function (response) {
                deferred.resolve(response);
            })
            .error(function (response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function createNote(note) {
        var deferred = $q.defer();

        $http
            .post(api + '/api/note', note)
            .success(function (response) {
                deferred.resolve(response);
            })
            .error(function (response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }
}