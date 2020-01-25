import React from 'react';


import ReactEmoji from 'react-emoji';


import {MessageContainer,SentText, MessageText,MessageBox} from './Styles'
const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  const trimmedUser = user.trim().toLowerCase()


  if(trimmedUser === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    
    isSentByCurrentUser
   
      ? (
       
        <MessageContainer justifyStart>
          <SentText  styles={{"padding-left": "10px"}}>{user}</SentText>
          <MessageBox backgroundBlue>
         
            <MessageText colorWhite>{ReactEmoji.emojify(text)}</MessageText>
          </MessageBox>
        </MessageContainer>
        )
        : (
          <MessageContainer>
            <MessageBox backgroundLight>
            
              <MessageText colorDark>{ReactEmoji.emojify(text)}</MessageText>
            </MessageBox>
            <SentText styles={{"padding-right": "10px"}}>{user}</SentText>
          </MessageContainer>

        )
  );
}

export default Message;