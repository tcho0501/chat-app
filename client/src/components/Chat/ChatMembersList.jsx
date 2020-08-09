import React from 'react';
import styled from 'styled-components'

const ChatMembersListWrapper = styled.ul`
    list-style-type: none;
    margin: 0.67em 0px 0px 0px;
`

const ChatMembersListItem = styled.li`
`

const ChatMembersList = ({members}) => {
    return (
        <ChatMembersListWrapper>
            {members.map(member => {
                return <ChatMembersListItem>{member.name}</ChatMembersListItem>
            })}
        </ChatMembersListWrapper>
    );
}

export default ChatMembersList;