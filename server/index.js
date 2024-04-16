import app from './app.js'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { PORT } from './config/env.js'
import { logInfo } from './utils/loggers.js'
import { messageEvent } from './events/message.event.js'

const server = createServer(app)
export const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 2000
  }
})

io.on('connection', messageEvent)

server.listen(PORT, () => {
  logInfo(`Server running on port ${PORT}...`)
})