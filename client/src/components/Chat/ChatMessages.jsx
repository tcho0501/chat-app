import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import ScrollableFeed from 'react-scrollable-feed'
import styled from 'styled-components'
import ChatMessage from './ChatMessage'

const ChatMessageWrapper = styled.div`
`
const ChatMessagesWrapper = styled.div`
    width: 30%;
    min-width: 400px;
    min-height: 500px;
    max-height: 500px;
    font-family: 'Roboto', sans-serif;
    border-left: 2px solid grey;
    border-right: 2px solid grey;
`

const ChatMessages = ({messages, name}) => {
    // note name refers to user's name
    return (
        <ChatMessagesWrapper>
            <ScrollableFeed>
                {messages.map((message,i) => (
                    <ChatMessageWrapper key = {i}> 
                        <ChatMessage message = {message} name = {name}/>
                    </ChatMessageWrapper>
                ))}
            </ScrollableFeed>
        </ChatMessagesWrapper>
    );
}

export default ChatMessages;