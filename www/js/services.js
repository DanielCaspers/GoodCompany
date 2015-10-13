angular.module('GoodCompany.services', [])

    .factory('Directory', function() {

      // Some fake testing data
      var directory = [{
        id: 0,
        name: 'Ben Sparrow',
        activities: [ {name:'Golf', id:'10'}, {name:'Bingo', id:'2'}, {name:'Horseshoes', id:'13'}],
        since:'1429040972784',
        roomNumber: '106',
        image: 'img/ContactPhotos/elder1.jpg'
      }, {
        id: 1,
        name: 'Grouch O\'Callahan',
        activities: [ {name:'Chess', id:'5'}, {name:'Gardening', id:'9'}, {name:'Rummy', id:'21'}],
        since:'1427919070000',
        roomNumber: '303',
        image: 'img/ContactPhotos/elder2.jpg'
      }, {
        id: 2,
        name: 'Olga Finlayson',
        activities: [ {name:'Reading', id:'20'}, {name:'Socializing', id:'23'}, {name:'Watching TV', id:'26'}],
        since:'1427141470000',
        roomNumber: '242',
        image: 'img/ContactPhotos/elder3.jpg'
      }, {
        id: 3,
        name: 'Marie Walton',
        activities: [ {name:'Hiking', id:'11'}, {name:'Biking', id:'1'}, {name:'Travel', id:'24'}],
        since:'1425672670000',
        roomNumber: '117',
        image: 'img/ContactPhotos/elder4.jpg'
      }, {
        id: 4,
        name: 'Janet Miller',
        activities: [ {name:'Poker', id:'18'}, {name:'Bridge', id:'4'}, {name:'Window Shopping', id:'28'}],
        since:'1425240670000',
        roomNumber: '321',
        image: 'img/ContactPhotos/elder5.jpg'
      }, {
        id: 5,
        name: 'Perry Governor',
        activities: [ {name:'Biking', id:'1'}, {name:'Socializing', id:'23'}, {name:'Museums', id:'14'}],
        since:'1425240670000',
        roomNumber: '237',
        image: 'img/ContactPhotos/elder6.jpg'
      }, {
        id: 6,
        name: 'Adam Bradleyson',
        activities: [ {name:'History', id:'12'}, {name:'Museums', id:'14'}, {name:'Re-enactments', id:'19'}],
        since:'1414008670000',
        roomNumber: '113',
        image: 'img/ContactPhotos/elder7.jpg'
      },{
        id: 7,
        name: 'Hoa Nguyen',
        activities: [ {name:'Gardening', id:'9'}, {name:'Sewing', id:'22'}, {name:'Painting', id:'15'}],
        since:'1405455070000',
        roomNumber: '204',
        image: 'img/ContactPhotos/elder8.jpg'
      },{
        id: 8,
        name: 'Mike November',
        activities: [ {name:'Driving', id:'8'}, {name:'Antiques', id:'0'}],
        since:'1395605470000',
        roomNumber: '309',
        image: 'img/ContactPhotos/elder9.jpg'
      },{
        id: 9,
        name: 'Ilene Killian',
        activities: [ {name:'Reading', id:'20'}, {name:'Book Clubs', id:'3'}, {name:'Cooking', id:'6'}],
        since:'1389989470000',
        roomNumber: '121',
        image: 'img/ContactPhotos/elder10.jpg'
      },{
        id: 10,
        name: 'Matilda Wexford',
        activities: [ {name:'Socializing', id:'23'}, {name:'Bingo', id:'2'}],
        since:'1385928670000',
        roomNumber: '216',
        image: 'img/ContactPhotos/elder11.jpg'
      },{
        id: 11,
        name: 'Bob Stout',
        activities: [ {name:'Whittling', id:'27'}, {name:'Piano', id:'18'}, {name:'Book Clubs', id:'3'}],
        since:'1378732370000',
        roomNumber: '100',
        image: 'img/ContactPhotos/elder12.jpg'
      },{
        id: 12,
        name: 'Walter Pollak',
        activities: [ {name:'Walking', id:'25'}, {name:'Parks', id:'16'}, {name:'Poker', id:'18'}],
        since:'1376511070000',
        roomNumber: '305',
        image: 'img/ContactPhotos/elder13.jpg'
      }];

      for (var i = 0; i < directory.length; i++) {
        var date= moment(directory[i].since,"x");
        directory[i].since = date.format("MMM. Do, YYYY");
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
      };
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Activities', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var activities = [{
        id: 0,
        name: 'Antiques',
        people: [{name:'Mike November', id:'8', image:'img/ContactPhotos/elder9.jpg'}],
        image: 'img/activities/antiques.jpg'
      }, {
        id: 1,
        name: 'Biking',
        people: [{name:'Marie Walton', id:'2', image:'img/ContactPhotos/elder3.jpg'}, {name:'Perry Governor', id:'5', image:'img/ContactPhotos/elder6.jpg'}],
        image: 'img/activities/biking.jpg'
      }, {
        id: 2,
        name: 'Bingo',
        people: [{name:'Ben Sparrow', id:'0', image:'img/ContactPhotos/elder1.jpg'}, {name:'Matilda Wexford', id:'10', image:'img/ContactPhotos/elder11.jpg'}],
        image: 'img/activities/bingo.jpg'
      }, {
        id: 3,
        name: 'Book Clubs',
        people: [{name:'Ilene Killian', id:'9', image:'img/ContactPhotos/elder10.jpg'}, {name:'Bob Stout', id: '11', image:'img/ContactPhotos/elder12.jpg'}],
        image: 'img/activities/bookclub.jpg'
      }, {
        id: 4,
        name: 'Bridge',
        people: [{name:'Janet Miller', id:'4', image:'img/ContactPhotos/elder5.jpg'}],
        image: 'img/activities/bridge.jpg'
      },{
        id: 5,
        name: 'Chess',
        people: [{name:'Grouch O\'Callahan', id:'1', image:'img/ContactPhotos/elder2.jpg'}],
        image: 'img/activities/chess.jpg'
      },{
        id: 6,
        name: 'Cooking',
        people: [{name:'Ilene Killian', id:'9', image:'img/ContactPhotos/elder10.jpg'}],
        image: 'img/activities/cooking.jpg'
      },{
        id: 7,
        name: 'Dominoes',
        image: 'img/activities/dominoes.jpg'
      },{
        id: 8,
        name: 'Driving',
        people: [{name:'Mike November', id:'9', image:'img/ContactPhotos/elder10.jpg'}],
        image: 'img/activities/driving.jpg'
      },{
        id: 9,
        name: 'Gardening',
        people: [{name:'Grouch O\'Callahan', id:'1', image:'img/ContactPhotos/elder2.jpg'}, {name:'Hoa Nguyen', id:'7', image:'img/ContactPhotos/elder8.jpg'}],
        image: 'img/activities/gardening.jpg'
      },{
        id: 10,
        name: 'Golf',
        people: [{name:'Ben Sparrow', id:'0', image:'img/ContactPhotos/elder1.jpg'}],
        image: 'img/activities/golf.jpg'
      },{
        id: 11,
        name: 'Hiking',
        people: [{name:'Marie Walton', id:'3', image:'img/ContactPhotos/elder4.jpg'}],
        image: 'img/activities/hiking.jpg'
      },{
        id: 12,
        name: 'History',
        people: [{name:'Adam Bradleyson', id:'6', image:'img/ContactPhotos/elder7.jpg'}],
        image: 'img/activities/history.jpg'
      },{
        id: 13,
        name: 'Horseshoes',
        people: [{name:'Ben Sparrow', id:'0', image:'img/ContactPhotos/elder1.jpg'}],
        image: 'img/activities/horseshoe.jpeg'
      },{
        id: 14,
        name: 'Museums',
        people: [{name:'Perry Governor', id:'5', image:'img/ContactPhotos/elder6.jpg'}, {name:'Adam Bradleyson', id:'6', image:'img/ContactPhotos/elder7.jpg'}],
        image: 'img/activities/museum.jpg'
      },{
        id: 15,
        name: 'Painting',
        people: [{name:'Hoa Nguyen', id:'7', image:'img/ContactPhotos/elder8.jpg'}],
        image: 'img/activities/painting.jpg'
      },{
        id: 16,
        name: 'Parks',
        people: [{name:'Walter Pollak', id:'12', image:'img/ContactPhotos/elder13.jpg'}],
        image: 'img/activities/parks.jpg'
      },{
        id: 17,
        name: 'Piano',
        people: [{name:'Bob Stout', id:'11', image:'img/ContactPhotos/elder12.jpg'}],
        image: 'img/activities/piano.jpg'
      },{
        id: 18,
        name: 'Poker',
        people: [{name:'Janet Miller', id:'4', image:'img/ContactPhotos/elder5.jpg'}, {name:'Walter Pollak', id:'12', image:'img/ContactPhotos/elder13.jpg'}],
        image: 'img/activities/poker.jpg'
      },{
        id: 19,
        name: 'Re-enactments',
        people: [{name:'Adam Bradleyson', id:'6', image:'img/ContactPhotos/elder7.jpg'}],
        image: 'img/activities/reenactment.jpg'
      },{
        id: 20,
        name: 'Reading',
        people: [{name:'Olga Finlayson', id:'2', image:'img/ContactPhotos/elder3.jpg'}, {name:'Ilene Killian', id:'9', image:'img/ContactPhotos/elder10.jpg'}],
        image: 'img/activities/reading.jpg'
      },{
        id: 21,
        name: 'Rummy',
        people: [{name:'Grouch O\'Callahan', id:'1', image:'img/ContactPhotos/elder2.jpg'}],
        image: 'img/activities/rummy.jpg'
      },{
        id: 22,
        name: 'Sewing',
        people: [{name:'Hoa Nguyen', id:'7', image:'img/ContactPhotos/elder8.jpg'}],
        image: 'img/activities/sewing.jpg'
      },{
        id: 23,
        name: 'Socializing',
        people: [{name:'Olga Finlayson', id:'2', image:'img/ContactPhotos/elder3.jpg'}, {name:'Perry Governor', id: '5', image:'img/ContactPhotos/elder6.jpg'}, {name:'Matilda Wexford', id: '10', image:'img/ContactPhotos/elder11.jpg'}],
        image: 'img/activities/socializing.jpg'
      },{
        id: 24,
        name: 'Travel',
        people: [{name:'Marie Walton', id:'3', image:'img/ContactPhotos/elder4.jpg'}],
        image: 'img/activities/travel.jpg'
      },{
        id: 25,
        name: 'Walking',
        people: [{name:'Walter Pollak', id:'12', image:'img/ContactPhotos/elder13.jpg'}],
        image: 'img/activities/walking.jpg'
      },{
        id: 26,
        name: 'Watching TV',
        people: [{name:'Olga Finlayson', id:'2', image:'img/ContactPhotos/elder3.jpg'}],
        image: 'img/activities/watchingtv.jpg'
      },{
        id: 27,
        name: 'Whittling',
        people: [{name:'Bob Stout', id:'11', image:'img/ContactPhotos/elder12.jpg'}],
        image: 'img/activities/whittling.jpg'
      },{
        id: 28,
        name: 'Window Shopping',
        people: [{name:'Janet Miller', id:'4', image:'img/ContactPhotos/elder5.jpg'}],
        image: 'img/activities/windowshopping.jpg'
      }];

      return {
        all: function() {
          return activities;
        },
        get: function(activityID) {
          // Simple index lookup
          return activities[activityID];
        }
      };
    });
