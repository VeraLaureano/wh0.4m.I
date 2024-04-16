import express from 'express'
import logger from 'morgan'

const app = express()

app.use(logger('dev'))
app.use(express.static('client'))

app.use('/join', (_req, res) => {
  res.sendFile(process.cwd() + '/client/join.html')
})

app.use('/chat', (_req, res) => {
  res.sendFile(process.cwd() + '/client/chat.html')
})

export default app