var appModule = angular.module('appModule',[])

appModule.controller('studentsController', function($scope) {
	$scope.students = [
			{name:'David',age:3},
			{name:'John',age:5},
			{name:'Kyle',age:1},
			{name:'Will',age:3},
			{name:'Henri',age:4},
			{name:'George',age:3},
			{name:'Catherine',age:7}
		]

		$scope.addStudent = function (){
				// add to the array
				$scope.students.push($scope.newStudent); 
				// clear the form values
				$scope.newStudent = {};
		}
})