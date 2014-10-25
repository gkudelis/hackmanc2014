'use Strict';

var hackMancApp = angular.module('hackMancApp', ['ngRoute', 'ngResource']);

hackMancApp.config(['$locationProvider', '$routeProvider',
    function($location, $route) {
        $location.html5Mode(false);

        $route.when('/', {
            controller: 'homeCtrl',
            templateUrl: '/scripts/application/views/home/index.html'
        }).when('/login', {
            controller: 'loginCtrl',
            templateUrl: '/scripts/application/views/login/index.html'
        }).when('/register', {
            controller: 'registerCtrl',
            templateUrl: '/scripts/application/views/register/index.html'
        });
    }
]);