(function(){
    const socket = io(),
        form = document.querySelector('form'),
        m = document.querySelector('input'),
        messages = document.querySelector('#messages')

    form.addEventListener('submit', function(e) {
        e.preventDefault()
        socket.emit('chat message', m.value)
        m.value = ""
    })

    socket.on('chat message', function(msg) {
        const listItem = document.createElement('p')
        listItem.classList.add('paragraph')
        listItem.innerHTML = msg
        messages.appendChild(listItem)
        const completeStory = {}
        let paragraph = document.querySelector('.paragraph:last-of-type').innerHTML
        completeStory.
        console.log(completeStory)
        socket.emit('completeStory', completeStory)
    })

    socket.on( 'leave', function( msg ) {

        const clients = document.querySelector('.clientCounter')
        clients.innerHTML = msg.number

    } )

})()