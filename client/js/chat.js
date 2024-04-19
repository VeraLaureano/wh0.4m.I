// Import the 'io' object from the specified URL (Socket.io library)
import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';

// Initialize a Socket.io connection
const socket = io();

// Get references to HTML elements
const form = document.getElementById('form'); // Reference to the form element
const input = document.getElementById('input'); // Reference to the input field
const messages = document.getElementById('messages'); // Reference to the messages container
const button = document.getElementById('button'); // Reference to the button element
const lightbox = document.getElementById('lightbox'); // Reference to the lightbox element
const lightboxText = document.getElementById('lightbox-text'); // Reference to the lightbox text element
const close = document.getElementById('close'); // Reference to the close button element

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

// Listen for incoming 'see' events from the server
socket.on('see', (msg) => {
  // Display the received message in the lightbox
  lightboxText.textContent = msg;
  lightbox.style.display = 'flex';
});

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const message_key = window.prompt('Message key: '); // Prompt for a message key
  const message_id = window.prompt('Message id: '); // Prompt for a message id

  // If the input value is not empty
  if (input.value) {
    // Emit a 'message' event with the input value, 'sessionStorage.key_room', message key, and message id
    socket.emit('message', input.value, sessionStorage.key_room, message_key, message_id);
    input.value = ''; // Clear the input field
  }
});

// Add an event listener for button click
button.addEventListener('click', () => {
  const message_key = window.prompt('Message key: '); // Prompt for a message key
  const message_id = window.prompt('Message id: '); // Prompt for a message id
  const messagesList = messages.querySelectorAll('li'); // Get all list items in the messages container
  let messageContent = "";

  // Iterate over each message in the list
  messagesList.forEach((message) => {
    const content = message.textContent.split(" - "); // Split the message content by ' - '

    // If the message id matches the provided message id
    if (String(content[0]) === String(message_id)) {
      messageContent = content[1]; // Set the message content
    }
  });

  // Emit a 'see' event with the message content and message key
  socket.emit('see', messageContent, message_key);
});

// Add an event listener for close button click
close.addEventListener('click', () => {
  // Clear the lightbox text and hide the lightbox
  lightboxText.textContent = "";
  lightbox.style.display = 'none';
});
