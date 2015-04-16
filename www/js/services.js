angular.module('starter.services', [])

    .factory('Directory', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var directory = [{
        id: 0,
        name: 'Ben Sparrow',
        activities: ['Golf', 'Bingo', 'Horseshoes'],
        since:'1429040972784',
        roomNumber: '106',
        image: 'img/ContactPhotos/elder1.jpg'
      }, {
        id: 1,
        name: 'Grouch O\'Callahan',
        activities: ['Chess', 'Gardening', 'Rummy'],
        since:'1427919070000',
        roomNumber: '303',
        image: 'img/ContactPhotos/elder2.jpg'
      }, {
        id: 2,
        name: 'Olga Finlayson',
        activities: ['Reading', 'Drinking', 'Watching TV'],
        since:'1427141470000',
        roomNumber: '242',
        image: 'img/ContactPhotos/elder3.jpg'
      }, {
        id: 3,
        name: 'Marie Walton',
        activities: ['Hiking', 'Biking', 'Travel'],
        since:'1425672670000',
        roomNumber: '117',
        image: 'img/ContactPhotos/elder4.jpg'
      }, {
        id: 4,
        name: 'Janet Miller',
        activities: ['Poker', 'Bridge', 'Window Shopping'],
        since:'1425240670000',
        roomNumber: '321',
        image: 'img/ContactPhotos/elder5.jpg'
      }, {
        id: 5,
        name: 'Perry Governor',
        activities: ['Biking', 'Drinking', 'Museums'],
        since:'1425240670000',
        roomNumber: '237',
        image: 'img/ContactPhotos/elder6.jpg'
      }, {
        id: 6,
        name: 'Adam Bradleyson',
        activities: ['History', 'Museums', 'Re-enactments', 'Theatre'],
        since:'1414008670000',
        roomNumber: '113',
        image: 'img/ContactPhotos/elder7.jpg'
      },{
        id: 7,
        name: 'Hoa Nguyen',
        activities: ['Gardening', 'Sewing', 'Painting'],
        since:'1405455070000',
        roomNumber: '204',
        image: 'img/ContactPhotos/elder8.jpg'
      },{
        id: 8,
        name: 'Mike November',
        activities: ['Driving', 'Antiques', 'Smoking'],
        since:'1395605470000',
        roomNumber: '309',
        image: 'img/ContactPhotos/elder9.jpg'
      },{
        id: 9,
        name: 'Ilene Killian',
        activities: ['Reading', 'Book Clubs', 'Cooking'],
        since:'1389989470000',
        roomNumber: '121',
        image: 'img/ContactPhotos/elder10.jpg'
      },{
        id: 10,
        name: 'Matilda Wexford',
        activities: ['Smoking', 'Drinking', 'Bingo'],
        since:'1385928670000',
        roomNumber: '216',
        image: 'img/ContactPhotos/elder11.jpg'
      },{
        id: 11,
        name: 'Bob Stout',
        activities: ['Whittling', 'Piano', 'Book Clubs'],
        since:'1378732370000',
        roomNumber: '100',
        image: 'img/ContactPhotos/elder12.jpg'
      },{
        id: 12,
        name: 'Walter Pollak',
        activities: ['Walking', 'Parks', 'Poker'],
        since:'1376511070000',
        roomNumber: '305',
        image: 'img/ContactPhotos/elder13.jpg'
      }];

      for (var i = 0; i < directory.length; i++) {
        var date= moment(directory[i].since,"x");
        directory[i].since = date.format("dddd, MMM Do, YYYY");
      }

      return {
        all: function() {
          return directory;
        },
        remove: function(person) {
          directory.splice(directory.indexOf(person), 1);
        },
        get: function(personID) {
          for (var i = 0; i < directory.length; i++) {
            if (directory[i].id === parseInt(personID)) {
              return directory[i];
            }
          }
          return null;
        }
      }
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Activities', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var activities = [{
        id: 0,
        name: 'Golf',
        image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
      }, {
        id: 1,
        name: 'Bingo',
        image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
      }, {
        id: 2,
        name: 'Horseshoes',
        image: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
      }, {
        id: 3,
        name: 'Chess',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      }, {
        id: 4,
        name: 'Dominoes',
        image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
      },{
        id: 5,
        name: 'Rummy',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 6,
        name: 'Reading',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 7,
        name: 'Drinking',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 8,
        name: 'Watching TV',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 9,
        name: 'Hiking',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 10,
        name: 'Biking',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 11,
        name: 'Travel',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 12,
        name: 'Poker',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 13,
        name: 'Bridge',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 14,
        name: 'Window Shopping',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 15,
        name: 'History',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 16,
        name: 'Museums',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 17,
        name: 'Re-enactments',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 18,
        name: 'Gardening',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 19,
        name: 'Sewing',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 20,
        name: 'Painting',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 21,
        name: 'Driving',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 22,
        name: 'Antiques',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 23,
        name: 'Book Clubs',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 24,
        name: 'Cooking',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 25,
        name: 'Whittling',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 26,
        name: 'Piano',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 27,
        name: 'Bingo',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 28,
        name: 'Walking',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },{
        id: 29,
        name: 'Parks',
        image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      }];


      return {
        all: function() {
          return activities;
        },
        get: function(activityID) {
          // Simple index lookup
          return activities[activityID];
        }
      }
    });
