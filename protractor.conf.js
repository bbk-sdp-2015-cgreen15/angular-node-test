var SpecReporter = require('jasmine-spec-reporter');
var reporters = require('jasmine-reporters');

exports.config = {

  framework: 'jasmine2',
  directConnect: true,
  specs: ['test/e2e/**/*.spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8000',
  allScriptsTimeout: 500000,
  restartBrowserBetweenTests: false,

  onPrepare: function () {

    var reporter = new SpecReporter({
      displayStacktrace: true,
      displaySpecDuration: true,
      displaySuiteNumber: true
    });
    jasmine.getEnv().addReporter(reporter);
    browser.driver.manage().window().setSize(1280, 768);
    browser.driver.manage().deleteAllCookies();
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    },
    isVerbose: true,
    includeStackTrace: true,
    showTiming: true,
    realtimeFailure: true
  }


};
