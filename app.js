// Initialize Firebase
var config = {
  apiKey: "<apiKey>",
  authDomain: "<authDomain>",
  databaseURL: "<databaseURL>",
  storageBucket: "<storageBucket>"
};

firebase.initializeApp(config);

var firebaseDB = firebase.database();
var messagesInFirebase = firebaseDB.ref('messages');

// CREATE a new message.
$('#message-form').on('submit', function(event) {

  // To prevent the default behavior of the form
  // element, which is refreshing the page:
  event.preventDefault();

  // Get the user's input.
  var messageText = $('#message').val();

  // "Create" a new message object in the database
  messagesInFirebase.push({
    message: messageText,
    votes: 0
  });

});
