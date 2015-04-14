angular.module('starter.services', [])

    .factory('Chats', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        activities: 'Golf, Bingo, Horseshoes',
        since:'1429040972784',
        roomNumber: '106',
        face: 'img/ContactPhotos/elder1.jpg'
      }, {
        id: 1,
        name: 'Grouch O\'Callahan',
        activities: 'Chess, Dominoes, Rummy',
        since:'1425672670000',
        roomNumber: '303',
        face: 'img/ContactPhotos/elder2.jpg'
      }, {
        id: 2,
        name: 'Olga Finlayson',
        activities: 'Reading, Drinking, Watching TV',
        since:'1427919070000',
        roomNumber: '242',
        face: 'img/ContactPhotos/elder3.jpg'
      }, {
        id: 3,
        name: 'Marie Walton',
        activities: 'Hiking, Biking, Travel',
        since:'1427141470000',
        roomNumber: '117',
        face: 'img/ContactPhotos/elder4.jpg'
      }, {
        id: 4,
        name: 'Janet Miller',
        activities: 'Poker, Bridge, Window Shopping',
        since:'1429040972784',
        roomNumber: '321',
        face: 'img/ContactPhotos/elder5.jpg'
      }, {
        id: 5,
        name: 'Perry Governor',
        activities: 'Reading, Drinking, Watching TV',
        since:'1425240670000',
        roomNumber: '237',
        face: 'img/ContactPhotos/elder6.jpg'
      }, {
        id: 6,
        name: 'Adam Bradleyson',
        activities: 'History, Museums, Re-enactments, Theatre',
        since:'1414008670000',
        roomNumber: '113',
        face: 'img/ContactPhotos/elder7.jpg'
      },{
        id: 7,
        name: 'Hoa Nguyen',
        activities: 'Gardening, Sewing, Painting',
        since:'1405455070000',
        roomNumber: '204',
        face: 'img/ContactPhotos/elder8.jpg'
      },{
        id: 8,
        name: 'Mike November',
        activities: 'Driving, Grilling, Restoring Cars',
        since:'1395605470000',
        roomNumber: '309',
        face: 'img/ContactPhotos/elder9.jpg'
      },{
        id: 9,
        name: 'Ilene Killian',
        activities: 'Reading, Book Clubs, Cooking',
        since:'1389989470000',
        roomNumber: '121',
        face: 'img/ContactPhotos/elder10.jpg'
      },{
        id: 10,
        name: 'Matilda Wexford',
        activities: 'Smoking, Drinking, Bingo',
        since:'1385928670000',
        roomNumber: '216',
        face: 'img/ContactPhotos/elder11.jpg'
      },{
        id: 11,
        name: 'Bob Stout',
        activities: 'Whittling, Piano, Juggling',
        since:'1378732370000',
        roomNumber: '100',
        face: 'img/ContactPhotos/elder12.jpg'
      },{
        id: 12,
        name: 'Walter Pollak',
        activities: 'Walking, Going to the park, Knitting',
        since:'1376511070000',
        roomNumber: '305',
        face: 'img/ContactPhotos/elder13.jpg'
      }];

      for (var i = 0; i < chats.length; i++) {
        var date= moment(chats[i].since,"x");
        chats[i].since = date.format("ddd MMM Do, YYYY");
      }

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
      var friends = [{
        id: 0,
        name: 'Ben Sparrow',
        notes: 'Enjoys drawing things',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
      }, {
        id: 1,
        name: 'Max Lynx',
        notes: 'Odd obsession with everything',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
      }, {
        id: 2,
        name: 'Andrew Jostlen',
        notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
      }, {
        id: 3,
        name: 'Adam Bradleyson',
        notes: 'I think he needs to buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      }, {
        id: 4,
        name: 'Perry Governor',
        notes: 'Just the nicest guy',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
      }];


      return {
        all: function() {
          return friends;
        },
        get: function(friendId) {
          // Simple index lookup
          return friends[friendId];
        }
      }
    });
