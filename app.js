const express = require('express')
const app = express() 
const ejs = require('ejs')
const http = require('http').Server(app);
const io = require('socket.io')(http)

const port = 3000

let messages = []

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    io.of('/').clients((error, clients) => {
        if (error) throw error
        res.render('index', {number: clients.length})
    })
})

app.get('/admin', function(req, res) {
    res.render('admin')
})

io.on('connection', function (socket) {

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    io.of('/').clients((error, clients) => {
        if (error) throw error
        socket.broadcast.emit('leave', { number: clients.length });
    })
    socket.on('disconnect', (reason) => {
        io.of('/').clients((error, clients) => {
            if (error) throw error
            socket.broadcast.emit('leave', { number: clients.length });
        })
    })
});

io.on('connection', function(socket) {

    io.sockets.emit('completeStory', messages)

    socket.on('completeStory', function (data) {
        messages = data
        io.sockets.emit('completeStory', data)
    })
})

io.on('connection', function (socket) {
    socket.on('resetClick', function(reset) {
        messages = []
        io.sockets.emit('storyReset')
        return messages
    })
})

http.listen(port, function () {
    console.log('server is online at port ' + port)
})