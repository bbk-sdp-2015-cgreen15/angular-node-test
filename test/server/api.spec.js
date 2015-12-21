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
        var auth = new Auth('mock mongo connection string');

        it(' auth module has expected authorisation test function ', function () {

            expect(typeof auth).to.equal('object');
            expect(typeof auth.testAuth).to.equal('function');
        });

        it(' auth module gives auth pass for correct admin credentials ', function () {

            var user = auth.testAuth('admin', 'password');
            expect(user.action).to.equal('AUTH_SUCCESS');
            expect(user.role).to.equal('admin');
        });

        it(' usernames are case insensitive ', function () {

            var user = auth.testAuth('AdMiN', 'password');
            expect(user.action).to.equal('AUTH_SUCCESS');
        });

        it(' passwords ARE case sensitive ', function () {

            var user = auth.testAuth('admin', 'Password');
            expect(user.action).to.equal('AUTH_FAILURE');
        });


        it(' auth module gives auth fail for incorrect user credentials ', function () {

            var user = auth.testAuth('john.smith', 'password');
            expect(user.action).to.equal('AUTH_FAILURE');
        });

    });

});
