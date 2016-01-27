(function() {
    module.exports = function(app){

        // Get notes
        app.get('/api/notes', function (request, response) {
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

            response.json(notes);
        });
    }
}());