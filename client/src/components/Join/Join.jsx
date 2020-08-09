import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components'
import JoinInputs from './JoinInputs'
import Jumbotron from 'react-bootstrap/Jumbotron'

const JoinInnerContainer = styled.div``
const JoinHeader = styled.h1``

const JoinErrorMessage = styled.p``

const JOIN_HEADER_TEXT = `Join a room now!`

const Join = () => {
    const [name, setName] = useState(``);
    const [room, setRoom] = useState(``);
    const [errorMessage, setErrorMessage] = useState(``);

    const handleNameChange = (event) => setName(event.target.value)
    const handleRoomChange = (event) => setRoom(event.target.value)
    const handleButtonClick = (event) => {
        if (!name || !room) {
            setErrorMessage(`Please enter Name and room`)
            setTimeout(() => {
                console.log('reset error message')
                setErrorMessage(``)
            }, 2000)
            return event.preventDefault()
        }
        return null
    }
    console.log(name, room)

    return (
        
        <Jumbotron>
            <JoinInnerContainer>
                <Alert 
                    variant="danger" 
                    show= {errorMessage.length !== 0}
                    onClose={() => setErrorMessage(0)} 
                    dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>{errorMessage}</p>
                </Alert>
                <JoinHeader>
                    {JOIN_HEADER_TEXT}
                </JoinHeader>
                <JoinInputs 
                    handleNameChange = {handleNameChange} 
                    handleRoomChange = {handleRoomChange} 
                    handleButtonClick ={handleButtonClick}
                    name = {name}
                    room = {room}
                />
            </JoinInnerContainer>
        </Jumbotron>
    );
}

export default Join;