// Import the 'express' module
import express from 'express';
// Import the 'morgan' middleware for logging
import logger from 'morgan'

// Create an instance of the Express application
const app = express();

// Use the 'morgan' middleware to log HTTP requests in the 'dev' format
app.use(logger('dev'));

// Serve static files from the 'client' directory
app.use(express.static('client'));

// Define a route for '/join'
app.use('/join', (_req, res) => {
  // Send the 'join.html' file to the client
  res.sendFile(process.cwd() + '/client/join.html');
});

// Define a route for '/chat'
app.use('/chat', (_req, res) => {
  // Send the 'chat.html' file to the client
  res.sendFile(process.cwd() + '/client/chat.html');
});

// Define a route for '/'
app.use('/chat', (_req, res) => {
  // Send the 'index.html' file to the client
  res.sendFile(process.cwd() + '/client/index.html');
});

export default app