var firebase = require("firebase");

module.exports = function ($scope) {
  $scope.messages = [
    { id: "33198", nick: 'hobp', message: "true" },
    { id: "33198", nick: 'hobp', message: "asdddddd" }
  ];
  $scope.newMessage = {};
  $scope.nick = "Anonymous";

  $scope.sendMessage = function (newMessage) {

    /*firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });*/
    $scope.messages.push({
      nick: newMessage.nick,
      message: newMessage.message
    });
    $scope.newMessage.message = '';
  }

  var config = {
    apiKey: "AIzaSyBnRqWBvsbR-5bnvaRAZZbJc_DQK2JzxHo",
    authDomain: "rabbiteer-bbb91.firebaseapp.com",
    databaseURL: "https://rabbiteer-bbb91.firebaseio.com",
    storageBucket: "rabbiteer-bbb91.appspot.com"
  };
  firebase.initializeApp(config);

  // Listen for authentication state changes
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // If the user is logged in, set them as the Firechat user
      $scope.nick += user.uid.substr(10, 8)
    } else {
      // If the user is not logged in, sign them in anonymously
      firebase.auth().signInAnonymously().catch(function (error) {
        console.log("Error signing user in anonymously:", error);
      });
    }
  });

  // Get a reference to the Firebase Realtime Database
  //var chatRef = firebase.database().ref();

  var location = window.location

  var messagesRef = firebase.database().ref('/chat_rooms/' + location.host + '/messages');

  messagesRef.on('child_added', function (data) {
    let message = data.val()
    console.log(message)
    $scope.messages.push({
      nick: message.nick,
      message: message.message
    });

    $scope.$apply();
  });

  $scope.RandomCode = function () {
    var today = new Date();
    var dd = ("00" + today.getDate()).substr(-2, 2);
    var mm = ("00" + (today.getMonth() + 1)).substr(-2, 2);
    var hh = ("00" + (today.getHours() + 1)).substr(-2, 2);
    var mm = ("00" + (today.getMinutes() + 1)).substr(-2, 2);
    var ss = ("00" + (today.getSeconds() + 1)).substr(-2, 2);
    var ran = Math.ceil((Math.random() * 999999)) + ""
    return "" + mm + dd + hh + mm + ss + ran;
  };
}