// Dependencies
// =============================================================
'use strict';
const appInsights = require("applicationinsights");
appInsights.setup("22460729-4e1d-4e4d-9c41-601b2f124c5a");
appInsights.start();

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 1338;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/public'));

// Routes
// =============================================================

// Basic route that sends the user to the index.html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(req.originalUrl);
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.toString()+err.stack);
    });

}


// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error');
    console.log(err);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
