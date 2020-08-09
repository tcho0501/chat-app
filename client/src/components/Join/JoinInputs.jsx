import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledFormWrapper = styled.form``
const StyledInputBoxes = styled.input``
const JoinButton = styled.button``

const JoinInputs = ({handleNameChange, handleRoomChange,handleButtonClick,name,room}) => {
    return (
        <StyledFormWrapper>
            <StyledInputBoxes placeholder = 'Name' type = 'text' onChange = {handleNameChange}/>
            <StyledInputBoxes placeholder = 'Room Name' type = 'text' onChange = {handleRoomChange}/>
            <Link onClick = {handleButtonClick} to = {`/chat?name=${name}&room=${room}`}>
                <JoinButton type = 'Submit'> Join </JoinButton>
            </Link>
        </StyledFormWrapper>
    );
}

export default JoinInputs;