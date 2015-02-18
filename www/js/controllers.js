
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



.controller('DashCtrl', function($scope) {
      //$http.get('http://clouie.ca/uploads/dsc_0682-copy_1424265305474.jpg')
    })

.controller('MainCtrl', ['$scope', '$route', 'Post',
        function($scope, $route, Post){
          $scope.post = new Post();
          $scope.posts = Post.query();

          $scope.newPost= function(){
            $scope.post = new Post();
            $scope.editing = false;
          }

          $scope.activePost= function(post){
            $scope.post=post;
            $scope.editing=true;
          }

          $scope.save = function() {
            if ($scope.post._id) {
              Post.update({_id: $scope.post_id}, $scope.post);
            } else {
              $scope.post.$save().then(function (response) {
                $scope.posts.push(response)
              });
            }
            $scope.editing = false;
            $scope.posts = new Post();
          }

          $scope.delete = function(post) {
            Post.delete(post)
            _.remove($scope.posts, post)
          }
        }

    ])

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

.controller('PhotosCtrl', function($scope, $stateParams, Photos) {
  $scope.photos = Photos.all();
  $scope.photo = Photos.get($stateParams.photoId)
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

//(function() {
//  var app = angular.module('user', ['user-photos']);
//  app.controller('userController', ['http', function($http){
//    var user = this;
//    user.photos=[];
//    $http.get('http://clouie.ca/uploads/').success(function(data){
//      user.photos=data;
//    });
//  }]);
//})();