module.exports = function (config) {

    config.set({

        // list of files / patterns to load in the browser
        files: [
            'public/js/lib/angular.js',
            'public/js/lib/angular-mocks.js',
            'public/js/**/*.js',
            'test/unit/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        proxies: {},

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,
        autoWatch: false,
        usePolling: true,

        // frameworks to use
        frameworks: ['jasmine'],
        browsers : ['ChromeDesktop'],

        customLaunchers: {
            ChromeDesktop: {
                base: 'Chrome',
                flags: ['--window-size=1280,768']
            }
        },

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-mocha-reporter'
        ],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 30000,

        // Test results reporter to use
        // possible values: 'dots', 'progress', 'mocha', 'junit', 'growl', 'coverage'
        reporters: ['mocha'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true

    });
};



