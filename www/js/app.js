// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
      .state('login', {
        url:'/login',
        templateUrl: 'templates/login.html',
        controller: 'SignInCtrl'
      })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl',
        controllerAs: 'DashCtrl'
      }
    }
  })



  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.camera', {
        url: '/camera',
        views: {
          'tab-camera': {
            templateUrl:'templates/tab-camera.html',
            controller: 'CameraCtrl'
          }
        }
      })

  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          scope:{
            header: '='
          },
          controller: 'FriendDetailCtrl'
        }
      }
    })

      .state('tab.friend-new', {
        url: '/friend/new',
        views: {
          'tab-friends': {
            templateUrl: 'templates/friend-new.html',
            controller: 'NewFriendCtrl'
          }
        }
      })

    .state('tab.photos', {
      url: '/photos',
      views: {
        'tab-photos': {
          templateUrl: 'templates/tab-photos.html',
          controller: 'PhotosCtrl'
        }
      }
    })

    .state('tab.add-photos', {
      url: '/add/photo',
      views: {
        'tab-photos': {
          templateUrl: 'templates/add-photos.html',
          controller: 'AddPhotosCtrl'
        }
      }
    })


    .state('tab.photo-create', {
      url: '/photo/create',
      views: {
        'tab-photos': {
          templateUrl: 'templates/photo-create.html',
          controller: 'PhotoCreateCtrl'
        }
      }
    })



    .state('tab.photo-detail', {
      url: '/photo/:photoId',
      views: {
        'tab-photos': {
          templateUrl: 'templates/photo-detail.html',
          controller: 'PhotoDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/dash');
      $urlRouterProvider.otherwise('/tab/dash');

});


