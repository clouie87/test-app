angular.module('starter.services', [])
    .service('LoginService', function($q) {
      return {
        loginUser: function(name, pw) {
          var deferred = $q.defer();
          var promise = deferred.promise;

          if (name == 'user' && pw == 'secret') {
            deferred.resolve('Welcome ' + name + '!');
          } else {
            deferred.reject('Wrong credentials.');
          }
          promise.success = function(fn) {
            promise.then(fn);
            return promise;
          }
          promise.error = function(fn) {
            promise.then(null, fn);
            return promise;
          }
          return promise;
        }
      }
    })

//.provider('Post', function() {
//      this.$get = ['$resource', function($resource) {
//        postmethods = $resource('http://localhost:8100/api/post/:_id', {}, {
//          update: {
//            method: 'PUT'
//          }
//        })
//
//        function Post(attributes) {
//          this.$save = new postmethods().$save()
//        }
//
//        Post.query = postmethods.query;
//
//
//        return Post;
//      }]
//    })


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Brian Best',
    lastText: 'Get the CBTransit App!',
    face: 'https://media.licdn.com/mpr/mpr/shrink_500_500/p/1/005/04e/006/2986ad0.jpg'
  }, {
    id: 1,
    name: 'Matt Johnston',
    lastText: 'Carol, Lay.rs can be used for more than just penguin pictures!',
    face: 'http://static.giantbomb.com/uploads/scale_medium/0/3683/1120634-penguin_chick.jpg'
  }, {
    id: 2,
    name: 'AJ Fraser',
    lastText: 'Did you get the ice cream?',
    face: 'https://lh5.googleusercontent.com/-Y66BM4Bn1kU/AAAAAAAAAAI/AAAAAAAAAbE/BZ2kFPK9NR4/photo.jpg'
  }, {
    id: 3,
    name: 'Darian MacDonald',
    lastText: 'Let me buy you coffee!!',
    face: 'http://i.forbesimg.com/media/lists/people/taylor-swift_416x416.jpg'
  }, {
    id: 4,
    name: 'Colin McInnis',
    lastText: 'Otters are the bomb!!',
    face: 'https://media.licdn.com/mpr/mpr/shrink_500_500/p/2/005/09a/3af/2a5067c.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Darian McDonald',
    notes: 'Enjoys drawing things',
    face: 'http://i.forbesimg.com/media/lists/people/taylor-swift_416x416.jpg'
  }, {
    id: 1,
    name: 'Matt Johnston',
    notes: 'Founder of Lay.rs',
    face: 'http://static.giantbomb.com/uploads/scale_medium/0/3683/1120634-penguin_chick.jpg'
  },
    //{
  //  id: 2,
  //  name: 'Andrew Jostlen',
  //  notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
  //  face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  //}, {
  //  id: 3,
  //  name: 'Adam Bradleyson',
  //  notes: 'I think he needs to buy a boat',
  //  face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  //}, {
  //  id: 4,
  //  name: 'Perry Governor',
  //  notes: 'Just the nicest guy',
  //  face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  //}
  ];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Photos', function() {


      //var photos = [];
      //var photos = [{
      //  //this would be the array that we get from our api with the filepath, description and album
      //  //this is dummy text for right now but what our database would return
      //  id: 1,
      //  album_id: 'Darian McDonald',
      //  description: 'Enjoys drawing things',
      //  filepath: 'http://clouie.ca/uploads/dsc_0682-copy_1424265305474.jpg'
      //}, {
      //  id: 1,
      //  album_id: 'Darian McDonald',
      //  description: 'Enjoys drawing things',
      //  filepath: 'http://clouie.ca/uploads/dsc_0682-copy_1424265305474.jpg'
      //}];
      //
      //return {
      //  all: function() {
      //    return photos;
      //  },
      //  get: function(photoId) {
      //    // Simple index lookup
      //    return photos[photoId];
      //  }
      //}
    });
