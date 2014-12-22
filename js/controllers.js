var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function MyController($scope) {

	$scope.author = {
		'name': 'Nic',
		'age': 25,
		'gender': 'male'
	};
});