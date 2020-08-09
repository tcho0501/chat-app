import React from 'react';
import styled from 'styled-components'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const InputGroupWrapper = styled(InputGroup)`
    width: 30%;
    min-width: 400px;
`

const ChatInput = ({message,handleChatBoxInputChange,sendMessage}) => {
    return (
        <InputGroupWrapper>
            <FormControl
                placeholder="type to chat..."
                aria-label="type to chat..."
                aria-describedby="basic-addon2"
                onChange = {handleChatBoxInputChange}
                value={message}
                onKeyPress = {(event) => event.which === 13 ? sendMessage(event) : null}
            />
            <InputGroup.Append>
                <Button 
                    variant="outline-secondary"
                    onClick={(event) => sendMessage(event)}
                >
                send
                </Button>
            </InputGroup.Append>
        </InputGroupWrapper>
        // <form>
        // <input
        //     type = "text"
        //     placeholder="type a message"
        //     value={message} 
        //     onChange ={handleChatBoxInputChange} 
        //     onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} 
        // />
        // <button onClick={(event) => sendMessage(event)}> Send </button>
        // </form>
    )
    
}

export default ChatInput;