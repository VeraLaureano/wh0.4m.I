import express from 'express'
import logger from 'morgan'

const app = express()

app.use(logger('dev'))
app.use(express.static('client'))

app.use('/', (_req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})


export default app