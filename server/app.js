'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Auth = require('./auth');
var auth = new Auth(' dummy connection string ');

var APP = function (port) {

    port = port || 8000;

    var app = express();

    //***************************************************
    // Set up routes and listener

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded

    app.use(express.static(__dirname + '/../public'));

    // Start listener
    app.listen(port, function () {
        console.log('App started on port ' + port);
    });

    app.route('/auth')
        .post(function (req, res, next) {
            auth.authWrapper(req, res, next);
        });

    return {
        app: app
    };
};

module.exports = APP;
