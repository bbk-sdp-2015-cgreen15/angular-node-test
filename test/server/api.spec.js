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

        it(' mongo logger has correct attributes ', function () {

            var mlogger = new ML('mock mongo connection string');

            expect(typeof mlogger).to.equal('object');
            expect(typeof mlogger.log).to.equal('function');
        });

    });

    describe(' Auth Module is instantiated   ', function () {

        var Auth = require(process.cwd() + '/server/auth.js');


        it(' auth module has expected authorisation test function ', function () {

            var auth = new Auth('mock mongo connection string');

            expect(typeof auth).to.equal('object');
            expect(typeof auth.testAuth).to.equal('function');
        });

    });

});
