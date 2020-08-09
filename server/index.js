const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000
const router = require('./router')

const app = express()
const server = http.createServer(app)
// instance of socketio
const io = socketio(server)

app.use(router)

io.on('connection', (socket) => {
    // console.log(socket)
    
    socket.on('join', ({name, room}, callback) => {
        // console.log('We have a new connection')
        // console.log(name, room)
        const {error, user} = addUser({id: socket.id, name, room})
        if (error) return callback(error);
        socket.emit(`message`, {user: 'admin', text:`${user.name}, welcome to the room ${user.room}`})
        const usersInRoom = getUsersInRoom(room)
        socket.emit(`usersInRoom`, {members: usersInRoom})
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text:`${user.name} has joined the room`})
        socket.join(user.room)
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message',{user: user.name, text: message});
        console.log({user: user.name, text: message})
        callback()
    })

    socket.on('disconnect', () => {
        //  getUser(socket.id)
        const disconnectedUser = removeUser(socket.id)
        console.log('disconnected user: ',disconnectedUser)
        
    })
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))

