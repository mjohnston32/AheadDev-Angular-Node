(function() {
    'use strict';

	// Config

	// Add Node dependency on express.
	// Initialise express into app
	var express  = require('express');
	var app = express();

	// Serves public assets. Currently just serves the whole directory
	app.use(express.static(__dirname));

	// Routing
	// Angular Front End
	app.get('/', function(request, response) {
		response.sendfile('./release/index.html');
	});

	app.listen(8081);
	console.log("App listening on port 8081");

}());