$(document).ready(function(){
	$("#new_item").keyup(function(event) {
	    if (event.keyCode === 13) {
	        $("#add_button").click();
		}
	});
});

var app = angular.module("todo", []);
app.controller("listCtrl", function($scope){
	$scope.saved = localStorage.getItem('todo');
	$scope.todo = (localStorage.getItem('todo')!==null) ? JSON.parse($scope.saved) : [];
	$scope.message = ($scope.todo.length == 0)? 'It all begins here':'One step at a time';

	$scope.add_new_item = function(){
		if(!$scope.new_item) return;
		//if($scope.todo.indexOf($scope.new_item) == -1)//return -1 if never occurs
		//{
			$scope.todo.push({text:$scope.new_item, done:false});
			localStorage.setItem('todo', JSON.stringify($scope.todo));
			$scope.new_item = '';
		//}
		//else $scope.error_message = "Something is wrong here..";	
	}
	$scope.remove_item = function(index){
		$scope.error_message = '';
		$scope.todo.splice(index, 1);
		localStorage.setItem('todo', JSON.stringify($scope.todo));
	}
});