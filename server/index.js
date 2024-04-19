// Importing the 'app' module from './app.js'
import app from './app.js'

// Importing 'Server' class from 'socket.io' library
import { Server } from 'socket.io'

// Importing 'createServer' function from 'node:http' module
import { createServer } from 'node:http'

// Importing 'PORT' constant from './config/env.js'
import { PORT } from './config/env.js'

// Importing 'logInfo' function from './utils/loggers.js'
import { logInfo } from './utils/loggers.js'

// Importing 'messageEvent' function from './events/message.event.js'
import { messageEvent } from './events/message.event.js'

// Importing 'seeEvent' function from './events/see.event.js'
import { seeEvent } from './events/see.event.js'

// Creating a server using the 'app' module
const server = createServer(app)

// Creating a new instance of 'Server' class from 'socket.io' library
export const io = new Server(server, {
  // Configuring connection state recovery options
  connectionStateRecovery: {
    maxDisconnectionDuration: 2000
  }
})

// Creating a new map to store user message counts
export const userMessageCount = new Map();

// Event listener for when a new connection is established
io.on('connection', async (socket) => {
  // Logging that a user has connected
  logInfo('A user has connected!');

  // Event listener for 'join' event
  socket.on('join', (room) => {
    // Joining the specified room
    socket.join(room);
  })

  // Event listener for 'disconnect' event
  socket.on('disconnect', (room) => {
    // Leaving the specified room
    socket.leave(room);
    // Deleting the user's message count from the map
    userMessageCount.delete(socket.userId)
    // Logging that a user has disconnected
    logInfo('An user has disconnected');
  })

  // Event listener for 'message' event
  socket.on('message', (msg, room, key, msgId) => messageEvent(msg, room, key, msgId, socket.id))
  
  // Event listener for 'see' event
  socket.on('see', (msg, key) => seeEvent(msg, key, socket.id))
})

// Starting the server to listen on the specified port
server.listen(PORT, () => {
  // Logging that the server is running on the specified port
  logInfo(`Server running on port ${PORT}...`)
})
