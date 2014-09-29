var MusicApp = angular.module('MusicApp', ['ngRoute']);

MusicApp.config(function($routeProvider){
	$routeProvider
	.when('/',
	{
		templateUrl: './../views/partials/login.html'
	})
	.when('/user',
	{
		templateUrl: './../views/partials/user.html'
	})
	// .when('/orders',
	// {
	// 	templateUrl: './../views/partials/orders.html'
	// })
	// .when('/customers',
	// {
	// 	templateUrl: './../views/partials/customers.html'
	// })
	// .when('/settings',
	// {
	// 	templateUrl: './../views/partials/settings.html'
	// })
});