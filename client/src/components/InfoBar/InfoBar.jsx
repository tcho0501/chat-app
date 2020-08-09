import React from 'react';
import styled from 'styled-components'

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const InfoBarWrapper= styled.div`
    border: 2px solid grey;
    border-radius: 10px 10px 0px 0px;
    width: 30%;
    min-width: 400px;
    background: #cccccc;
    display: flex;
    justify-content: space-between;
    margin: 0.67em 0px 0px 0px;
`

const RightInnerContainer = styled.div`
    
    width: 10%;
    text-align: center;
    margin: 6px 5px;
    padding: 0 5px;
`
const LeftInnerContainer = styled.div`
    margin: 5px 5px;
    padding: 0 5px;
    width: 90%;
    display: flex;
    justify-content: space-between;
`
const RoomNameHeader = styled.h3`
    font-family: 'Roboto', sans-serif;
    text-align:center;
    margin: 0px 0px;
    padding: 0px 0px;
    position: relative;
    width: 80%;
    height: 0%;
    top: 0%;
`

const ImageWrapper = styled.img`
    margin: 5px 0px 0px 0px;
    top: 50%;
    height: 10px;
    border: solid ForestGreen 1px;
    border-radius: 50% 50%;
`


const InfoBar = ({room}) => {
    // console.log(room)
    return (
        <InfoBarWrapper >
            <LeftInnerContainer>
                <ImageWrapper src = {onlineIcon} alt = 'online icon'/>
                <RoomNameHeader> {room} </RoomNameHeader>
            </LeftInnerContainer>
            <RightInnerContainer>
                {/* clicking on this takes you back to join page resets states*/}
                <a href = '/'><img src = {closeIcon} alt = 'online icon'/></a>
            </RightInnerContainer>
        </InfoBarWrapper >

    );
}

export default InfoBar;