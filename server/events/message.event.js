import { io } from '../index.js';
import { logInfo } from '../utils/loggers.js';
import { toBinary } from './../utils/binary.js'
import { encrypt } from './../utils/encrypt.js'
let usersConnected = 0;

export const messageEvent = (socket) => {
  const userMessageCount = new Map();

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

  socket.on('message', (msg, _room) => {
    const userId = socket.id;

    const maxMessages = 200;
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

    const message = toBinary(encrypt(msg))
    
    // io.to(room).emit('message', msg)
    io.emit('message', message)
  })
}