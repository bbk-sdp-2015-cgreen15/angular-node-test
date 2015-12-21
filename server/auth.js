'use strict';

var MLogger = require('./mlogger');
var mlogger;

var Auth = function Auth(connection) {
    mlogger = new MLogger(connection);
};


// TODO - in the wild this would be stored in an encrypted database with the passwords salted and hashed!
var users = {
    'user': {password: 'password', role: 'user'},
    'manager': {password: 'password', role: 'user'},
    'admin': {password: 'password', role: 'admin'},
    'developer': {password: 'password', role: 'user'},
    'tester': {password: 'password', role: 'user'}
};

Auth.prototype.testAuth = function (username, password) {

    username = username || '';
    // TODO - Check username and password

    var uname = username.toLowerCase();

    var auth = {action: null, role: null};
    var user = users[uname] || {};

    if (user.password === password) {
        auth.action = 'AUTH_SUCCESS';
        auth.role = user.role;
    } else {
        auth.action = 'AUTH_FAILURE';
    }

    // Log the auth

    var ip; // TODO - get from request

    mlogger.log(ip, Date.now(), auth.action, username, function () {}); // TODO - do we need a callback ?

    return auth;
};

module.exports = Auth;
