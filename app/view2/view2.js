'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope,$http) {
	$http({
	  method: 'GET',
	  //-- url: 'http://localhost:8888/portal/wp-json/'
	  url: 'http://pixelinkdev.com/testr/wp-json/wp/v2/posts'
	}).then(
	function successCallback(response) {
		console.log("response.status-->", response.status);
		console.log("response.statusText-->", response.statusText);
		console.log("response.headers-->", response.headers);
		console.log("response.config-->", response.config);
		console.log("response.data-->", response.data);
		// console.log("###", response.data.namespaces[2]+"/posts");

		$scope.posts = response.data;
		console.log($scope);
	    // this callback will be called asynchronously
	    // when the response is available
	}, function errorCallback(response) {
		console.log("!!!!", response.status);
	});


	$http({
	  method: 'GET',
	  url: 'http://pixelinkdev.com/testr/wp-json/'
	}).then(
	function successCallback(response) {
		console.log("### response.status-->", response.status);
		console.log("### response.statusText-->", response.statusText);
		console.log("### response.headers-->", response.headers);
		console.log("### response.config-->", response.config);
		console.log("### response.data-->", response.data);
	    // this callback will be called asynchronously
	    // when the response is available
	}, function errorCallback(response) {
		console.log("!!!!", response.status);
	});
}]);