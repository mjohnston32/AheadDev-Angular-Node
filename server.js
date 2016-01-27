(function() {
    'use strict';


// Config

// Add Node dependency on express and body-parser.
// Initialise express into app
var express  = require('express');
var bodyParser = require('body-parser'); 
var app = express(); 

// Serves public assets. Currently just serves the whole directory
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

// Routing

// Get notes
app.get('/api/notes', function(request, response) {
	var notes = [{
		"title" : "My First Note",
		"content" : "Stuff im writing in my first note blah blah",
		"author" : "MJohnston"
	},{
		"title" : "My Second Note",
		"content" : "Stuff im writing in my second note blah",
		"author" : "MJohnston"
	},{
		"title" : "My Third Note",
		"content" : "Stuff im writing in my third note blah blah blah",
		"author" : "MJohnston"
	}];

    response.json(notes);
});

// Angular Front End
app.get('/', function(request, response) {
    response.sendfile('./app/index.html');
});

app.listen(8080);
console.log("App listening on port 8080");

}());