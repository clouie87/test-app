
angular.module('starter.controllers', [])

    .controller('SignInCtrl', function($scope, $state){
      $scope.signIn = function(user){
        console.log('SignIn', user);
        $state.go('tab.dash');
      };
    })

    //.controller('InstagramCtrl', function($scope, $state){
    //  $scope.instaSignIn = function(user){
    //    console.log('Instagram Signin', user);
    //    $state.go('http://clouie.ca/auth/instagram');
    //  };
    //})

    .controller('FacebookCtrl', function($scope, $state){
      $scope.signIn = function(user){
        console.log('Facebook Signin', user);
        $state.go('/auth/facebook');
      };
    })

    .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
      $scope.data = {};

      $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
          $state.go('tab.dash');
        }).error(function(data) {
          var alertPopup = $ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
          });
        });
      }
    })

//.controller ('EditCtrl', function($scope, $ionicSideMenuDelegate) {
//    $scope.toggleRight = function() {
//        $ionicSideMenuDelegate.toggleRight();
//    };
//})

.controller('NewPhotoCtrl', function($scope, $ionicModal) {

        // Load the modal from the given template URL
        $ionicModal.fromTemplateUrl('add-photos.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;

        })
    })


.controller('DashCtrl', function($scope) {
      //$http.get('http://clouie.ca/uploads/dsc_0682-copy_1424265305474.jpg')
    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})



.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('PhotosCtrl', ['$scope', '$http', function($scope, $http, Photos){

      $scope.photos= [];
      $http.get('http://clouie.ca/photo/').success(function(data){
        //$window.photos = data;
        $scope.photos = data;

        //console.log(data.field('description', data.validPhotoResource.description))
      });
  }])

.controller('AddPhotosCtrl', ['$scope', '$http', function($scope, $http){
    $scope.photos= [];
    $http.get('http://clouie.ca/photo/').success(function(data){
        //$window.photos = data;
        $scope.photos = data;
        //console.log(data.field('description', data.validPhotoResource.description))
    });


}])


.controller('PhotoCreateCtrl', function($scope, $stateParams, Photos) {
    $scope.photo = Photos.get($stateParams.photoId);
})


.controller('PhotoDetailCtrl', ['$scope', '$http', 'Photos', function($scope, $http, $stateParams, Photos){
        $scope.photos= [];
        $http.get('http://clouie.ca/photo/').success(function(data){
            //$window.photos = data;
            $scope.photos = data;
            //console.log(data.field('description', data.validPhotoResource.description))
        });
        $scope.photo = Photos.get($stateParams.photoDescription);

}])


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

