(function () {
    'use strict';

    // Config

    // Add Node dependency on express and body-parser.
    // Initialise express into app
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();

    // Serves public assets. Currently just serves the whole directory
    app.use(bodyParser.urlencoded({'extended': 'true'}));
    app.use(bodyParser.json());

    // Routing
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

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

    app.listen(8080);
    console.log("App listening on port 8080");

}());