// Ionic GoodCompany App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'GoodCompany' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'GoodCompany.services' is found in services.js
// 'GoodCompany.controllers' is found in controllers.js
angular.module('GoodCompany', ['ionic', 'GoodCompany.controllers', 'GoodCompany.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.directory', {
      url: '/directory',
			abstract: true,
    })
		
		.state('tab.directory.main', {
			url: '',
			views: {
        'main@tab-directory': {
          templateUrl: 'templates/tab-directory.html',
          controller: 'DirectoryCtrl'
        }
      }
		})
		
    .state('tab.directory.person-detail', {
      url: '/:personID',
      views: {
        'person-detail@tab-directory': {
          templateUrl: 'templates/person-detail.html',
          controller: 'PersonCtrl'
        }
      }
    })

  .state('tab.activities', {
      url: '/activities',
      views: {
        'tab-activities': {
          templateUrl: 'templates/tab-activities.html',
          controller: 'ActivitiesCtrl'
        }
      }
    })
    .state('tab.activity-detail', {
      url: '/activities/:activityID',
      views: {
        'tab-activities': {
          templateUrl: 'templates/activity-detail.html',
          controller: 'ActivityDetailCtrl'
        }
      }
    })
;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/directory');

});
