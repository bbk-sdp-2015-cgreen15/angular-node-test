var expect = require('chai').expect;

describe(' App is instantiated   ', function () {

    var App = require(process.cwd() + '/server/app.js');
    var appObj = new App(8001);
    var app = appObj.app;

    it(' app is a function ', function () {
        expect(typeof app).to.equal('function');
    });

});
