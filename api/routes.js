(function() {
    module.exports = function(app) {
        var notes = [{
            noteId: 1,
            title: "My First Note",
            content: "Stuff im writing in my first note blah blah",
            author: "MJohnston"
        }, {
            noteId: 2,
            title: "My Second Note",
            content: "Stuff im writing in my second note blah",
            author: "MJohnston"
        }, {
            noteId: 3,
            title: "My Third Note",
            content: "Stuff im writing in my third note blah blah blah",
            author: "MJohnston"
        }];

        var nextNoteId = 4;

        // Get notes
        app.get('/api/notes', function (request, response) {
            response.json(notes);
        });

        // Create note
        app.post('/api/note', function(request, response) {
            var note = request.body;
            notes.push({
                noteId: nextNoteId,
                title: note.title,
                content: note.desc,
                author: 'Matt Johnston'
            });

            nextNoteId++;
            response.send("Success");
        });

        // Delete note
        app.get('/api/deleteNote/:noteId', function(request, response) {
            var noteId = request.params.noteId;

            notes.splice(findNote(noteId), 1);

            response.send("Success");
        });

        // Delete note
        app.post('/api/editNote', function(request, response) {
            var noteId = request.body.noteId;

            var note = notes[findNote(noteId)];
            note.title = request.body.title;
            note.content = request.body.desc;

            response.send("Success");
        });

        function findNote(noteId) {
            for(var i = 0; i < notes.length; i++) {
                if(notes[i].noteId === parseInt(noteId)) {
                    return i;
                }
            }
        }
    }
}());