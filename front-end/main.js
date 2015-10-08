var list = angular.module('contactList', ['ui.router']);

list.controller('userController', function($scope, $http){
	$scope.addUser = function(){
	console.log($scope.newUser)
	$http.post('http://localhost:3000/users', {data:$scope.newUser}).then(function(data){
		$scope.message = data.data;
	}).catch(function(e){
		console.log(e);
	})
	}
})