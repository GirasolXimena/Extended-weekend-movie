console.log('js');
const app = angular.module('MovieApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/movie', {
        templateUrl: '/views/viewmovie.html',
        controller: 'MovieController as vm'
    }).when( '/add', {
        templateUrl: '/views/addmovie.html',
        controller: 'GenreController as vm'
    }).otherwise({
        templateUrl: `<h1> 404 Page Not Found. Are you somewhere you shouldn't be?`
    })
});