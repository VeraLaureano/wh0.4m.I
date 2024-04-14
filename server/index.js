import app from './app.js'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { PORT } from './config/env.js'
import { logInfo } from './utils/loggers.js'
let usersConnected = 0;

const server = createServer(app)
const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 2000
  }
})

const userMessageCount = new Map();

io.on('connection', (socket) => {
  logInfo('A user has connected!')
  usersConnected++;
  logInfo('Total users: ' + usersConnected)

  socket.on('disconnect', () => {
    logInfo('An user has diconnected')
    usersConnected--;
  })

  socket.on('message', (msg) => {
    const userId = socket.id;

    const maxMessages = 3;
    const currentTime = Date.now();

    if (!userMessageCount.has(userId)) {
      userMessageCount.set(userId, { 
        count: 1,
        lastMessageTime: currentTime 
      });
    }
    else {
      const userState = userMessageCount.get(userId);

      if (userState.count >= maxMessages) {
        return;
      }

      userState.count++;
      userState.lastMessageTime = currentTime;
    }

    setTimeout(() => {
      userMessageCount.delete(userId);
    }, 15 * 60 * 1000);

    io.emit('message', msg)
  })
})

server.listen(PORT, () => {
  logInfo(`Server running on port ${PORT}...`)
})