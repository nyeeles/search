angular.module('myApp',[])
	.controller('MyController', function($scope, $http) {

		$scope.url = {
			'name': '',
			'url_start': 'http://gdata.youtube.com/feeds/api/users/',
			'url_end':'?alt=json',
			'api': ''
		};

		$('.search-btn').click(function(){
			$scope.url["api"] = $scope.url.url_start + $scope.url.name + $scope.url.url_end;
			
			$http.get($scope.url.api).success(function(data){
			$scope.channel = data;
		});
		});

	});