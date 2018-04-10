const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http)

const port = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(port, function () {
    console.log('Server is online at ' + port)
})