// Import necessary modules from other files
import { io, userMessageCount } from '../index.js';
import { toBinary } from './../utils/binary.js';
import { encrypt } from './../utils/encrypt.js';

// Define a function called messageEvent that takes two parameters: msg (the message content) and room (the chat room)
export const messageEvent = (msg, room) => {
  // Get the current timestamp
  const timestamp = new Date().getTime();

  // Set a maximum number of messages a user can send
  const maxMessages = 200;
  const currentTime = Date.now();

  // Check if the user has sent a message before
  if (!userMessageCount.has(timestamp)) {
    // If not, create a new entry for the user with an initial count of 1 and the current time
    userMessageCount.set(timestamp, { 
      count: 1,
      lastMessageTime: currentTime 
    });
  }
  else {
    // If the user has sent messages before, update their message count
    const userState = userMessageCount.get(timestamp);

    // If the user has reached the maximum allowed messages, return without doing anything
    if (userState.count >= maxMessages) {
      return;
    }

    // Increment the message count and update the last message time
    userState.count++;
    userState.lastMessageTime = currentTime;
  }

  // After 15 minutes, remove the user's message count entry
  setTimeout(() => {
    userMessageCount.delete(timestamp);
  }, 15 * 60 * 1000);

  // Encrypt the message and convert it to binary
  const message = toBinary(encrypt(msg));

  // Emit the encrypted binary message to the specified chat room
  io.to(room).emit('message', message);
  // Alternatively, you can broadcast the message to all connected clients using io.emit('message', message)
}
