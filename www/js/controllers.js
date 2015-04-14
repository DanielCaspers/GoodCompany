angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DirectoryCtrl', function($scope, Directory) {
  $scope.directory = Directory.all();
  $scope.remove = function(person) {
    Directory.remove(person);
  }
})

.controller('PersonCtrl', function($scope, $stateParams, Directory) {
  $scope.directory = Directory.get($stateParams.personID);
})

.controller('ActivitiesCtrl', function($scope, Activities) {
  $scope.activities = Activities.all();
})

.controller('ActivityDetailCtrl', function($scope, $stateParams, Activities) {
  $scope.activities = Activities.get($stateParams.activityID);
});
