const express = require('express')
const app = express() 
const ejs = require('ejs')
const http = require('http').Server(app);
const io = require('socket.io')(http)

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    io.of('/').clients((error, clients) => {
        if (error) throw error
        res.render('index', {number: clients.length})
    })
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
    socket.on('story', function(stories) {
        io.emit('story', stories)
        console.log(stories)
    })
})







http.listen(port, function () {
    console.log('Server is online at ' + port)
})