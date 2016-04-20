// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope,Todo) {

	$scope.newTodo = {name : '', done:false};

	var loadTodos = function(){
		Todo.get().success(function(data) {
			$scope.todos=data;
		});
	}
	
	loadTodos();
	
	$scope.deleteTodo = function(id){
		Todo.delete(id).success(function(data) {
			$scope.todos=data;
		});
	}
	
	$scope.createTodo = function(){
		Todo.create({name: $scope.newTodo.name, done:false}).success(function(data) {
			$scope.todos=data;
			$scope.newTodo = {name : '', done:false};
		});
		
	}
});