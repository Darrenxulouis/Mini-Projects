var app = angular.module("todo", []);
app.controller("listCtrl", function($scope){
	$scope.todo = [];
	if(localStorage.getItem('todo')) {
		$scope.todo = localStorage.getItem('todo');
	}
	$scope.add_new_item = function(){
		if(!$scope.new_item) return;
		if($scope.todo.indexOf($scope.new_item) == -1)
		{
			$scope.todo.push($scope.new_item);//return -1 if never occurs
			localStorage.setItem('todo', $scope.todo);
		}
		else $scope.error_message = "Something is wrong here..";	
	}
	$scope.remove_item = function(index){
		$scope.error_message = '';
		$scope.todo.splice(index, 1);
	}
});