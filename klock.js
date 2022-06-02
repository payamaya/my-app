/* // Importing the required modules
const WebSocketServer = require('ws')

// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 1234 })
/* let date = new Date() */

/* wss.on('connection', (ws) => {
  console.log('We are now connected to the server')

  setInterval(() => {
    const date = new Date().toString()
    wss.clients.forEach((client) => {
      client.send(date)
    })
  }, 10_000)
}) */ 