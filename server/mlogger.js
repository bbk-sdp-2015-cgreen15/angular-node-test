'use strict';

var mongoose = require('mongoose');

var MLogger = function (connection) {

    // TODO - Implement Connection to Mongo

    if (!connection) {
        throw new Error('Mongo Connection String Required');
    }
    this._con = connection;
};


MLogger.prototype.log = function (ip, ts, action, username, cb) {

    // TODO - implement adding to the appropriate MongoDB collection with Mongoose
    // and calling the callback once done

    cb();   // TODO - Change to mongoose status

};

module.exports = MLogger;
