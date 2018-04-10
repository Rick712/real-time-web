// $(function () {
//     var socket = io();
//     $('form').submit(function () {
//         socket.emit('chat message', $('#m').val());
//         $('#m').val('');
//         return false;
//     });
//     socket.on('chat message', function (msg) {
//         $('#messages').append($('<li>').text(msg));
//     });
// });

(function(){
    const socket = io(),
        form = document.querySelector('form'),
        m = document.querySelector('input'),
        messages = document.querySelector('#messages')
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        socket.emit('chat message', m.value)
        m.value
    })
    socket.on('chat message', function(msg) {
        const listItem = document.createElement('li')
        listItem.innerHTML = msg
        messages.appendChild(listItem)
    })
})()