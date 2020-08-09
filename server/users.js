let users = []

const NAME_EXISTS_ERROR = 'NAME_EXISTS'

const addUser = ({id, name,room}) => {
    // console.log('adding user')
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find((user) => user.room === room && user.name === name)

    // console.log(`existing user:`, existingUser.length > 0)
    if (existingUser) {
        console.log(`user already exists`, existingUser)
        return {error: NAME_EXISTS_ERROR}
    } 
    
    const user = {id, name, room}
    // console.log(`user does not exist`, user)
    console.log(`adding user`, user)
    users.push(user)

    return {user}
}
const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) return users.splice(index,1)[0]
}
const getUser = (id) => users.find(user => user.id === id)

const getUsersInRoom = (room) => users.filter(user=> user.room === room)

module.exports = { addUser, removeUser, getUser, getUsersInRoom };