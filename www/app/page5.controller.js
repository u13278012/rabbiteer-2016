var firebase = require("firebase");

module.exports = function ($scope) {
  $scope.nick = "hobp"
  $scope.location = window.location.hostname 
  $scope.messages = [];
  $scope.newMessage = {};

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

  var ref = '/chat_rooms/' + $scope.location+ '/messages'
  var messagesdbRef = firebase.database().ref(ref);

  messagesdbRef.on('child_added', function (data) {
    let message = data.val()
    $scope.messages.push({
      current: $scope.nick == message.nick ? true : false,
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

  $scope.sendMessage = function (newMessage) {
    firebase.database().ref(ref + '/' + $scope.RandomCode()).set({
      nick: $scope.nick,
      message: newMessage.message
    });
    $scope.newMessage.message = "" 
  }
}