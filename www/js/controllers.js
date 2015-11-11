angular.module('GoodCompany.controllers', [])

.controller('DirectoryCtrl', function($scope, Directory) {
	console.log("Entered DirectoryCtrl");
	//alert("DirectoryCtrl");
  $scope.directory = Directory.all();
  $scope.remove = function(person) {
    Directory.remove(person);
  };
})

.controller('PersonCtrl', function($scope, $stateParams, Directory, Activities) {
	console.log("Entered PersonCtrl");
	//alert("PersonCtrl");
  $scope.person = Directory.get($stateParams.personID);
	$scope.getActivity = function(activityID){
		return Activities.get(activityID);
	};
})

.controller('ActivitiesCtrl', function($scope, Activities) {
	console.log("Entered ActivitiesCtrl");
	//alert("ActivitiesCtrl");
  $scope.activities = Activities.all();
})

.controller('ActivityDetailCtrl', function($scope, $stateParams, Activities) {
	console.log("Entered ActivityDetailCtrl");
	//alert("ActivityDetailCtrl");
  $scope.activity = Activities.get($stateParams.activityID);
})
;
