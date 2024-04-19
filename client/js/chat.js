// Import the 'io' object from the specified URL (Socket.io library)
import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

// Initialize a Socket.io connection
const socket = io();

// Get references to HTML elements
const form = document.getElementById('form'); // Reference to the form element
const input = document.getElementById('input'); // Reference to the input field
const messages = document.getElementById('messages'); // Reference to the messages container
const button = document.getElementById('button');
const lightbox = document.getElementById('lightbox');
const lightboxText = document.getElementById('lightbox-text');
const close = document.getElementById('close');

// Emit a 'join' event with the value stored in 'sessionStorage.key_room'
socket.emit('join', sessionStorage.key_room);

// Listen for incoming 'message' events from the server
socket.on('message', (msg) => {
  // Create an HTML list item with the received message
  const item = `<li class='chat__message' id='message'>${msg}</li>`;
  // Append the item to the messages container
  messages.insertAdjacentHTML('beforeend', item);
  // Scroll to the bottom of the messages container
  messages.scrollTop = messages.scrollHeight;
});

socket.on('see', (msg) => {
  lightboxText.textContent = msg;
  lightbox.style.display = 'flex';
})

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const message_key = window.prompt('Message key: ');
  const message_id = window.prompt('Message id: ');

  // If the input value is not empty
  if (input.value) {
    // Emit a 'message' event with the input value and 'sessionStorage.key_room'
    socket.emit('message', input.value, sessionStorage.key_room, message_key, message_id);
    input.value = ''; // Clear the input field
  }
});

button.addEventListener('click', () => {
  const message_key = window.prompt('Message key: ');
  const message_id = window.prompt('Message id: ');
  const messagesList = messages.querySelectorAll('li');
  let messageContent = "";

  messagesList.forEach((message) => {
    const content = message.textContent.split(" - ");

    console.log(content);
    if (String(content[0]) === String(message_id)) {
      messageContent = content[1];
    }
  });

  socket.emit('see', messageContent, message_key);
});

close.addEventListener('click', () => {
  lightboxText.textContent = "";
  lightbox.style.display = 'none';
})