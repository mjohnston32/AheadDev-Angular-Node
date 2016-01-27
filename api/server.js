(function () {
    'use strict';

    // Config

    // Add Node dependency on express and body-parser.
    // Initialise express into app
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();

    app.use(bodyParser.urlencoded({'extended': 'true'}));
    app.use(bodyParser.json());

    // Handle Cross Origin
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    require("./routes")(app);

    app.listen(8080);
    console.log("App listening on port 8080");

}());