import app from './app.js'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { PORT } from './config/env.js'
import { logInfo } from './utils/loggers.js'
import { messageEvent } from './events/message.event.js'
let usersConnected = 0;

const server = createServer(app)
export const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 2000
  }
})

export const userMessageCount = new Map();

io.on('connection', async (socket) => {
  logInfo('A user has connected!')
  usersConnected++;
  logInfo('Total users: ' + usersConnected);

  socket.on('join', (room) => {
    socket.join(room)
  })

  socket.on('disconnect', (room) => {
    socket.leave(room);
    logInfo('An user has diconnected')
    usersConnected--;
    logInfo('Total users: ' + usersConnected)
  })

  socket.on('message', messageEvent)
})

server.listen(PORT, () => {
  logInfo(`Server running on port ${PORT}...`)
})