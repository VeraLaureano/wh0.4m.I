import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js'

// let key = window.prompt('S3t y0ur sess1on k3y: ')
// while (key.length < 12) {
//   key = window.prompt('S3t y0ur sess1on k3y (min length 12): ')
// }

const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages = document.getElementById('messages')

socket.on('message', (msg) => {
  const item = `<li class='chat__message'>${toBinary(btoa(msg))}</li>`
  messages.insertAdjacentHTML('beforeend', item)
  messages.scrollTop = messages.scrollHeight
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})