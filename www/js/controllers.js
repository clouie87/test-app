
angular.module('starter.controllers', [])



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
    //
    //  $scope.data = {};
    //
    //  $scope.login = function() {
    //    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
    //      $state.go('tab.dash');
    //    }).error(function(data) {
    //      var alertPopup = $ionicPopup.alert({
    //        title: 'Login failed!',
    //        template: 'Please check your credentials!'
    //      });
    //    });
    //  }
    })

    .controller('PopupCtrl', function($scope,$ionicPopup, $timeout){
        $scope.showPopup=function(){
            $scope.data = {};
            var myPopup = $ionicPopup.show({
                template: '<input type="text" placeholder="Email" ng-model="data.username"> <input type="password" placeholder="Password" ng-model="data.password">',
                title: 'ePic Gallery',
                subTitle: 'Join',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>SignUp</b>',
                        type: 'button-energized',
                        onTap: function(data) {
                            var email = $scope.data.username;
                            var password = $scope.data.password;

                            data= [
                                email,
                                password
                            ];

                            console.log(data);
                            //return data;

                            return $scope.signIn(data);


                            //if (!$scope.data.password) {
                            //    //don't allow the user to close unless he enters wifi password
                            //    e.preventDefault();
                            //} else {
                            //    return $scope.data.wifi;
                            //}
                        }



                    }
                ]

            });



    myPopup.then(function(res) {
        console.log('Tapped!', res);

    });

    $timeout(function() {
        myPopup.close(); //close the popup after 3 seconds for some reason
    }, 10000)
};

})



.controller('SignInCtrl', ['$scope', '$http', function($scope, $http, LoginService, $state) {
        $scope.signIn = function (data) {
            console.log('SignIn control is starting for: ', data);
            //$state.go('tab.dash');

            //var email = $scope.data.username;
            //var password = $scope.data.password;
            //
            //data= [
            //    email,
            //    password
            //];

        $http.post('http://clouie.ca/signup', data).success(function (data) {
            console.log('getting shit from api', data);



            $scope.signIn = function() {
                console.log('getting stuff from api');
                LoginService.loginUser($scope.data.email, $scope.data.password).success(function (data) {
                    console.log('this will be redirected to dashboard', data);
                    //$state.go('tab.dash');
                });

                //    // render the page and pass in any flash data if it exists
                //    res.render('signup.ejs', {message: req.flash('signupMessage')});
            }


        });

    };
    }])


.controller('NewPhotoCtrl', function($scope, $ionicModal) {

        // Load the modal from the given template URL
        $ionicModal.fromTemplateUrl('add-photos.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;

        })

    })

.controller('CameraCtrl', function($scope, $state){
        $scope.imageURI = 'http://images.wikia.com/clubpenguin/images/6/6c/Add_image_icon.svg';

        //takePhoto function attached to button
        $scope.takePhoto= function() {
            console.log('take photo');
            var cameraOptions = {
                //destinationType: Camera.DestinationType.FILE_URI,
                //sourceType: Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
                //allowEdit: false,
                //encodingType: Camera.EncodingType.JPEG,
                //popoverOptions: CameraPopoverOptions,
                targetWidth: 300,
                targetHeight: 300
            };
            $http.post('http://clouie.ca/photo', $scope.imageURI).success(function (data) {
                console.log('posting shit to api', data);
                //this is where i will do api calls to take the picture

                navigator.camera.getPicture(function (imageURI) {
                    $scope.imageURI = imageURI;
                    $state.go('tab.camera');
                }, function (err) {
                    alert('sorry cant take photo!');
                }, cameraOptions);

            })
        }
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



.controller('FriendDetailCtrl', function($scope, $state, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
        $scope.saveFriend= function(){
            console.log('going to save friend');
            $state.go('/friend/new');
        }
})

    .controller('NewFriendCtrl', function($scope, $state){

})
.controller('AddNewFriendCtrl', function($http){
        var controller= this;
        this.saveFriend = function(friend){
            console.log('trying to save new friend');
            controller.errors=null;
            $http({method:'POST', url:'/friends', data: friend})
                .catch(function(friend){
                    controller.errors=friend.data.error;
                })
        };
    })

.controller('PhotosCtrl', ['$scope', 'Photos', function($scope, Photos){
        Photos.all().success(function(data){
            $scope.photos = data;
        });
  }])

.controller('AddPhotosCtrl', ['$scope', 'Photos', function($scope, Photos){
        Photos.all().success(function(data){
            $scope.photos = data;
            console.log(data[0].description);

    });


}])


.controller('PhotoCreateCtrl', ['$scope', '$stateParams', 'Photos', function($scope, $stateParams, Photos) {
        Photos.all().success(function(data) {
            $scope.photo = data.get($stateParams.photoId);
            console.log('going to ', $stateParams.photoId);
        });

}])


.controller('PhotoDetailCtrl', ['$scope', '$http', 'Photos', function($scope, $http, $stateParams, Photos){
        console.log('getting details of specific photo');
        $scope.photo= [];
        $http.get('http://clouie.ca/photo/'+$stateParams.photoId).success(function(data){
            //console.log(photoId);
            //$window.photos = data;
            $scope.photo = data;
            //console.log(data.field('description', data.validPhotoResource.description))
        });
        //$scope.photo = Photos.get($stateParams.photoDescription);

}])

.controller('NewPhotoCtrl', function($scope,$ionicPopup, $http) {


        $scope.showAddPhoto = function () {
            $scope.data={};

            var myAddPhoto = $ionicPopup.show({
                template: '<input type="file" placeholder="Photo" ng-model="data.photo"> <input type="text" placeholder="Description" ng-model="data.description">',
                title: 'Upload your own Photo!',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(data) {
                            var photo = $scope.data.photo;
                            var description = $scope.data.description;

                            data = [
                                photo,
                                description
                            ];

                            console.log(data);
                            var controller = this;
                            this.savePhoto = function(data) {
                                $http({method: 'POST', url: 'http://clouie.ca/photo', data: data});
                                console.log('posting the photo data');
                            };
                            //return $scope.addNewPhoto(data);
                        }
                    }
                ]

            });


            myAddPhoto.then(function (data) {
                $http({method: 'POST', url: 'http://clouie.ca/photo', data: data});
                console.log('posting the photo data');

                    console.log('Save the photo!', data);
            });
        }
    })
.controller('AddNewPhotoCtrl', ['$scope', '$http', function($scope, $http, LoginService, $state) {
        console.log('adding photo');
        $scope.addNewPhoto = function (data) {
            console.log('Saving the photo: ', data);
        }
    }])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

