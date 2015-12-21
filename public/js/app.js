'use strict';

var app = angular.module('app', []);


// TODO - Browserify or grunt build this !

app.service('auth-service', ['$http', '$q', function ($http, $q) {

    this.doAuth = function doAuth(u, p) {

        var delay = $q.defer();

        $http.post("http://localhost:8000/auth", {
                username: u,
                password: p
            })
            .then(function (response) {
                delay.resolve(response);
            });

        return delay.promise;
    };

}]);

app.controller('loginCtrl', ['$scope', 'auth-service', function($scope, authService) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function (credentials) {

        authService.doAuth(credentials.username, credentials.password)
            .then(function (user) {

                var data = user.data;

                console.log('data');
                console.log(data);
            });

    };
}]);

