import React from 'react';


import closeIcon from  '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'


import {InfBar,LeftInnerContainer,RightInnerContainer,OnlineIcon} from './Styles'


const InfoBar = ({room}) => (
    <InfBar>
        <LeftInnerContainer>
            <OnlineIcon src={onlineIcon } alt="online icon"/>
        <h3>{room}</h3>
        </LeftInnerContainer>
        <RightInnerContainer>
            <a href="/"><OnlineIcon src={closeIcon} alt="close imagem" /></a>

        </RightInnerContainer>
    </InfBar>
)

export default InfoBar;