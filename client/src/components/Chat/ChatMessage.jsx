import React from 'react';
import styled from 'styled-components'

const UserChatMessageContainer = styled.div`
`
const OtherChatMessageContainer = styled.div`
`
const ChatMessageName = styled.p`
`

const ChatMessageText = styled.p`
`

const ChatMessage = ({message : {user, text} ,name}) => {
    const trimmedName = name.trim().toLowerCase()
    const isSentByCurrentUser = trimmedName === user
    return (
        isSentByCurrentUser
            ? (
                <UserChatMessageContainer>
                    <ChatMessageName>You</ChatMessageName>
                    <ChatMessageText>{text}</ChatMessageText>
                </UserChatMessageContainer>
            )
            :(
                <OtherChatMessageContainer>
                    <ChatMessageName>{user}</ChatMessageName>
                    <ChatMessageText>{text}</ChatMessageText>
                </OtherChatMessageContainer>
            )
    );
}

export default ChatMessage;