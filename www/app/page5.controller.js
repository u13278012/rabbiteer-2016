const firebase = require("firebase");

module.exports = function ($scope) {

  $scope.nick = "Anon"
  $scope.location = window.location.hostname
  $scope.messages = [];
  $scope.newMessage = {};
  var config = {
    apiKey: "AIzaSyBnRqWBvsbR-5bnvaRAZZbJc_DQK2JzxHo",
    authDomain: "rabbiteer-bbb91.firebaseapp.com",
    databaseURL: "https://rabbiteer-bbb91.firebaseio.com",
    storageBucket: "rabbiteer-bbb91.appspot.com"
  };

  var providerGitHub = new firebase.auth.GithubAuthProvider();
  var providerGoogle = new firebase.auth.GoogleAuthProvider();

  if (firebase.apps.length == 0)
    firebase.initializeApp(config);

  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      // This gives you Selected Provider's Access Token. You can use it to access the APIs of the selected provider.
      //var token = result.credential.accessToken;

    }
    // The signed-in user info.
  }).catch(function (/*error*/) {
    // Handle Errors here.
    ////var errorCode = error.code;
    ////var errorMessage = error.message;
    // The email of the user's account used.
    ////var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    ////var credential = error.credential;
    // ...
  });

  var ref = '/chat_rooms/' + $scope.location + '/messages'
  var messagesdbRef = firebase.database().ref(ref);

  messagesdbRef.on('child_added', function (data) {
    let message = data.val()

    $scope.messages.push({
      id: data.key,
      current: message.userid == $scope.user.uid ? true : false,
      nick: message.nick,
      message: message.message
    });
    $scope.$apply();
  });

  // Listen for authentication state changes
  firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
      // If the user is logged in, set the nickname and store the Firebase User for later use 
      $scope.nick = user.displayName;
      $scope.user = user;
      $scope.$apply();
    }
  });

  $scope.signInWithGitHub = function () {
    // Sign them in with GitHub
    firebase.auth().signInWithRedirect(providerGitHub);
  }

  $scope.signInWithGoogle = function () {
    // Sign them in with GitHub
    firebase.auth().signInWithRedirect(providerGoogle);
  }

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

  $scope.isLoggedIn = function () {
    return $scope.user != undefined;
  }

  $scope.signOut = function () {
    firebase.auth().signOut();
    $scope.user = undefined;
  }

  $scope.changeDisplayName = function (displayname) {
    $scope.user.updateProfile({
      displayName: displayname
    }).then(function () {
      // Profile updated successfully!
      var displayName = $scope.user.displayName;
      $scope.nick = displayName;
      alert('Name successfully changed to ' + displayName);
    }, function (/*error*/) {
      // An error happened.
    });
  }

  $scope.changeDisplayNameOnEnter = function (event, displayname) {
    if (event.key === "Enter") {
      $scope.changeDisplayName(displayname);
    }
  }

  $scope.sendMessage = function (newMessage) {
    firebase.database().ref(ref + '/' + $scope.RandomCode()).set({
      userid: $scope.user.uid,
      nick: $scope.nick,
      message: newMessage.message
    }, function (e) {
      if (e != null)
        alert(e.message);
    });
    $scope.newMessage.message = "";
  }
  
  $scope.sendMessageOnEnter = function (event, newMessage) {
    if (event.key === "Enter") {
      $scope.sendMessage(newMessage);
    }
  }
}