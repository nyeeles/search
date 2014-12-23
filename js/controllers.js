angular.module('myApp',[])
	.controller('MyController', function($scope, $http) {

		// $http.get('http://gdata.youtube.com/feeds/api/users/smosh?alt=json').success(function(data){
		// 	$scope.channel = data;
		// });

		$scope.channel = {
			'name': 'smosh',
			'url_start': 'http://gdata.youtube.com/feeds/api/users/',
			'url_end':'?alt=json',
			'api': ''
		};

		$scope.channel["api"] = $scope.channel.url_start + $scope.channel.name + $scope.channel.url_end;

	});