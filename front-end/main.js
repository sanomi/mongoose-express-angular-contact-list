var list = angular.module('contactList', ['ui.router']);

list.controller('userController', function($scope, $http){
	$http.get('http://localhost:3000/users').then(function(data){
		$scope.userList = data.data
	})
	$scope.addUser = function(){
	console.log('scopeUser', $scope.newUser)
	$http.post('http://localhost:3000/users', {data:$scope.newUser})
	.then(function(data){
		console.log(data)
		$scope.message = 'Success!';
		$http.get('http://localhost:3000/users').then(function(data){
			$scope.userList = data.data
		})
	}).catch(function(e){
		console.log(e);
	})
	}
})

list.service('getUsers', function($scope,$http){

})