(function() {
    module.exports = function(app){
        var notes = [{
            "title": "My First Note",
            "content": "Stuff im writing in my first note blah blah",
            "author": "MJohnston"
        }, {
            "title": "My Second Note",
            "content": "Stuff im writing in my second note blah",
            "author": "MJohnston"
        }, {
            "title": "My Third Note",
            "content": "Stuff im writing in my third note blah blah blah",
            "author": "MJohnston"
        }];

        // Get notes
        app.get('/api/notes', function (request, response) {
            response.json(notes);
        });

        // Create note
        app.post('/api/note', function(request, response) {
            var note = request.body;
            notes.push({
                title: note.title,
                content: note.desc,
                author: 'Matt Johnston'
            });

            response.send("Success");
        });
    }
}());