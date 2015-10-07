angular.module('GoodCompany.controllers', [])

.controller('DirectoryCtrl', function($scope, Directory) {
  $scope.directory = Directory.all();
  $scope.remove = function(person) {
    Directory.remove(person);
  }
})

.controller('PersonCtrl', function($scope, $stateParams, Directory, Activities) {
  $scope.person = Directory.get($stateParams.personID);
	$scope.getActivity = function(activityID){
		return Activities.get(activityID);
	}
})

.controller('ActivitiesCtrl', function($scope, Activities) {
  $scope.activities = Activities.all();
})

.controller('ActivityDetailCtrl', function($scope, $stateParams, Activities) {
  $scope.activity = Activities.get($stateParams.activityID);
})
;
