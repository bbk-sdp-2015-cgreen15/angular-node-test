var expect = require('chai').expect;

describe(' Backend Code ', function () {

    describe(' App is instantiated   ', function () {

        var App = require(process.cwd() + '/server/app.js');
        var appObj = new App(8001);
        var app = appObj.app;

        it(' app is a function ', function () {
            expect(typeof app).to.equal('function');
        });

    });

    describe(' Mongo Logger is instantiated   ', function () {

        var ML = require(process.cwd() + '/server/mlogger.js');

        it(' mongo logger is instantiated ', function () {

            var mlogger = new ML('mock mongo connection string');

            expect(typeof mlogger).to.equal('object');
            expect(typeof mlogger.log).to.equal('function');
        });

    });

});
