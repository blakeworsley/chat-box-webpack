const $ = require('jquery');
require('./style.scss');

const $messageUserInput = $('.message-user');
const $messageContentInput = $('.message-content');
const $sendMessageButton = $('.send-message');
const $messagesContainer = $('.messages');
let messagesArray = [];

function getMessages() {
  $.getJSON('/messages').then(function(message) {
    for (var i = 0; i < message.messages.length; i++) {
      messagesArray.push(message.messages[i]);
    }
    messagesArray.forEach(renderMessages);
  });
}

function renderMessages(message) {
  $messagesContainer.append(`
    <article data-id="${message.id}">
      <h1>${message.user}</h1>
      <p>${message.content}</p>
      <button id="delete-button">X</button>
    </article>
    `);
  }

  // function findMessageById(id) {
  //   message.messages.find(function(message));
  //   return message.id === id;
  // }

  $sendMessageButton.on('click', function() {
    const user = $messageUserInput.val();
    const content = $messageContentInput.val();
    $.post('/messages', { message: {user, content, id} })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(JSON.parse(error.responseText).error);
    });
  });

  // $messagesContainer.('click', '.delete-button', function() {
  //   deleteMessage();
  // });

getMessages();
// Implement the ability to delete a message.
// find element by id

// remove from server

// reRenderMessages

// delete button click event
// $messagesContainer.on('click', '.delete-button', function() {
//   findElementById(message);
//   deleteFromServer();
//   renderMessage();
// });


// Properly display the error message to the user if one exists.
// Implement the ability to update a message.
// Show a loading message while waiting for the server to respond.
