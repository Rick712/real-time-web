(function(){
    const socket = io(),
        form = document.querySelector('form'),
        m = document.querySelector('input'),
        messages = document.querySelector('#messages')

    if(form){
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

            const completeStory = []
            
            let paragraph = document.querySelectorAll('p')
            
            paragraph.forEach(function(paragraph) {
                completeStory.push(paragraph.innerHTML)
                return completeStory
            })

            socket.emit('completeStory', completeStory)
        })

        socket.on( 'leave', function( msg ) {

            const clients = document.querySelector('.clientCounter')
            clients.innerHTML = msg.number

        })

        socket.on('completeStory', function(data) {
            
            let line = document.querySelectorAll('p')
            line.forEach(function (element) {
                element.remove()
            })
            
            data.forEach(function(pline){
                const listItem = document.createElement('p')
                listItem.innerHTML = pline
                messages.appendChild(listItem)
            })
        })
        socket.on('storyReset', function () {
            alert('the story has been reset')
            const p = document.querySelectorAll('p')
            p.forEach(function(sentence) {
                alert('the story has been')
                sentence.remove()
            })
            alert('The story has been reset')
        })
    }

    const button = document.querySelector('.reset')
    if (button) {
        button.addEventListener('click', function() {
            socket.emit('resetClick')
        })

        socket.on('storyReset', function() {
            alert('The story has been reset')
        })
    }

})()