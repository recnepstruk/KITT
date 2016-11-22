angular.module('module.app', ['ngRoute'])
    .config(['$routeProvider', Router]);

function Router($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/html/home.html', // Where an HTML file lives - content for our site AT THIS ROUTE
        })
        .otherwise({
            redirectTo: '/'
        });
};
