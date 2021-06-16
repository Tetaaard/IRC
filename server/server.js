const http =  require('http')
const express = require('express')
const socketio = require('socket.io')
const bodyParser = require('body-parser')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');


const router = require('./router');

  const PORT = process.env.PORT || 5050

const app = express()
// ajout de socket.io
const server = http.Server(app)
const io = socketio(server, {origins:'*:*'})


app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))
app.use(router);

// établissement de la connexion
io.on('connection', (socket) =>{
   console.log(`Client ${socket.id} has connected`)
   socket.on('join', ({name , room}, callback) =>{
    // console.log(name, room);  
    const {error, user } = addUser({ id: socket.id, name , room})
  
  if(error) return callback(error)

  socket.emit('message', { user: 'Tattle Team', text: ` Hey ${user.name}, welcome in ${user.room} !`})
  socket.broadcast.to(user.room).emit('messsage',{ user:'Tattle Team', text:`${user.name}, has joined the room`})

  socket.join(user.room)

  io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

  callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

    callback()
  });

   socket.on('disconnect', () => {
    console.log(`Oh ! ${socket.id} has left the room`)

    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Tattle Team', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }

  })
})

// on change app par server
server.listen(PORT, ()=> console.log(`Server has started on port ${PORT} \nOpen on http://localhost:${PORT}`))