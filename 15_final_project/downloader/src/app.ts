import express from 'express'
import 'reflect-metadata'
import amqp = require('amqplib/callback_api')

const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

amqp.connect({
  protocol: 'amqp',
  hostname: 'KARINA-LAPTOP',
  port: 5672,
  username: 'admin',
  password: 'pass123'
}, function (error0, connection) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (error0) {
    throw error0
  }
  console.log(connection)
})
