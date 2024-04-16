// Import the 'io' object from the specified URL (Socket.io library)
import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

// Initialize a Socket.io connection
const socket = io();

// Get references to HTML elements
const form = document.getElementById('form'); // Reference to the form element
const input = document.getElementById('input'); // Reference to the input field
const messages = document.getElementById('messages'); // Reference to the messages container

// Emit a 'join' event with the value stored in 'sessionStorage.key_room'
socket.emit('join', sessionStorage.key_room);

// Listen for incoming 'message' events from the server
socket.on('message', (msg) => {
  // Create an HTML list item with the received message
  const item = `<li class='chat__message'>${msg}</li>`;
  // Append the item to the messages container
  messages.insertAdjacentHTML('beforeend', item);
  // Scroll to the bottom of the messages container
  messages.scrollTop = messages.scrollHeight;
});

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // If the input value is not empty
  if (input.value) {
    // Emit a 'message' event with the input value and 'sessionStorage.key_room'
    socket.emit('message', input.value, sessionStorage.key_room);
    input.value = ''; // Clear the input field
  }
});
