# Real Time Chat

This project is built with `socket.io` and is used for basic real-time story writing between users.

The website can be accesed through: https://writeastory-famfisnkmz.now.sh/

<br/>
  <img src="https://i.imgur.com/q2gwGAT.png" alt="Image of a chat" height="auto" width="600" style="margin: 2em auto; display: block; margin: 0 auto;">
<br/>

- **[About this project](#about-this-project)**  
- **[Installing](#installing)**  
- **[Technology used](#technology-used)**  

## About this project
This project features a basic real-time story writing for multiple people.  
An unlimited number of people can join the story, and write when the person feels like it. Part of the fun is that everyone can participate to the story at any time. **REAL TIME!!!!**  

<br/>
  <img src="https://i.imgur.com/rJJrPfi.png" alt="Image of a chat" height="auto" width="100%" style="margin: 2em auto; display: block; margin: 0 auto;">
<br/>

As long as someone is visiting the page, the story continues to exist. When the last person leaves the page, the story resets. When the users want to reset the story, someone has to visit https://writeastory-famfisnkmz.now.sh/admin. On the page, you will see a big button with 'RESET STORY' on it. When clicked, the site will alert the users that the story has been reset, and all the lines will be removed.

<br/>
  <img src="https://i.imgur.com/VrwGeTE.png" alt="Image of a chat" height="auto" width="100%" style="margin: 2em auto; display: block; margin: 0 auto;">
<br/>

<br/>
  <img src="https://i.imgur.com/fl1cQoz.png" alt="Image of a chat" height="auto" width="100%" style="margin: 2em auto; display: block; margin: 0 auto;">
<br/>

In the upper right corner the page shows the current number of other visitors on the page

<br/>
  <img src="https://i.imgur.com/X6UQQUD.png" alt="Image of a chat" height="auto" width="100%" style="margin: 2em auto; display: block; margin: 0 auto;">
<br/>


## Installing
install  
```javascript
npm install
```  
run
```javascript
nodemon app.js
```

## Technology used  
This project includes:  
- Node
- Express
- EJS
- Socket.io  

_git money_
