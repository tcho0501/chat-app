import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar'
import ChatMembersList from './ChatMembersList'
import userIcon from '../../icons/userIcon.png'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import Jumbotron from 'react-bootstrap/Jumbotron'

const ChatInnerContainer = styled.div``
const ChatHeader = styled.h1`
    font-family: 'Roboto', sans-serif;
    margin: 0.67em 0px 0px 0px;
`
const ChatMembersHeader = styled.h2`
    font-family: 'Roboto', sans-serif;
    margin: 0.67em 0px 0px 0px;
`
const ChatUsername = styled.h3`
    font-family: 'Roboto', sans-serif;
    margin: 0em 0em 0px 0px;
    padding: 0px 0px;
    font-size: 1.17em;
    font-weight: bold;
    top: 50%;
    display: inline-block;
    vertical-align: middle;
`
const ChatUsernameWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    margin: .5em 0em 0px 0px;
    padding: 0 5px;
    position:relative;
    width: 30%
`
// const ChatBoxInput = styled.input`
//     font-family: 'Roboto', sans-serif;
// `

const UserIconWrapper = styled.img`
    margin: 0em 0px 0px 0px;
    bottom: 0px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
`


let socket;


const CHAT_HEADER_TEXT = `Chat with: `

const Chat = ({ location }) => {
    const SOCKET_IO_ENDPOINT = 'localhost:5000'

    const [name, setName] = useState(``);
    const [room, setRoom] = useState(``);
    const [message, setMessage] = useState(``);
    const [messages, setMessages] = useState([]);
    const [members, setMembers] = useState([]);
    // effect loads on render
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(SOCKET_IO_ENDPOINT)

        setName(name)
        setRoom(room)
        socket.emit('join', {name, room}, ({error}) => {
            console.log(error)
            alert(`name already exists in this group, try again`)
        }) // send this info to the backend on join
        // console.log(socket)
        // return () => {
        //     socket.emit('disconnect');
        //     socket.off();
        // }
    }, [SOCKET_IO_ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages.concat(message))
        })
    }, [messages])

    const handleChatBoxInputChange = event => setMessage(event.target.value)

    const sendMessage = event => {
        event.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(messages)

    return (
        <Jumbotron style={{height: "100%"}}>
            <ChatInnerContainer>
                <ChatHeader>{CHAT_HEADER_TEXT} {room}</ChatHeader>
                <ChatMembersHeader>Members:</ChatMembersHeader>
                <ChatUsernameWrapper>
                    <ChatUsername>{name}</ChatUsername>
                    <UserIconWrapper src = {userIcon} alt = 'user icon'/>
                </ChatUsernameWrapper>
                <ChatMembersList members = {members} />
                <InfoBar room = {room}></InfoBar>
                <ChatMessages messages = {messages} name = {name}/>
                <ChatInput 
                    message = {message} 
                    handleChatBoxInputChange = {handleChatBoxInputChange} 
                    sendMessage ={sendMessage}
                />
            </ChatInnerContainer>
        </Jumbotron>

    );
}

export default Chat;