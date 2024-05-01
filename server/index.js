const express = require("express");
const http = require('http')
const SocketIO = require('socket.io')
const cors = require('cors')

const app = express();
const server = http.createServer(app);
const io = SocketIO(server, {
    cors: {
      origin: '*',
    }
});

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

// IO 
io.on('connection', (socket) => {
    console.log("a user connected: ", socket.id);

    socket.on('message', (message) => {
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})

server.listen(9000, () => {
    console.log("Server started on PORT 9000")
})