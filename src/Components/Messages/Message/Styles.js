import styled from 'styled-components'

export const MessageBox = styled.div `
    border-radius: 20px;
    padding: 5px 20px;
    background: ${props => (props.backgroundBlue ? '#2979FF' :  '#F3F3F3')};
    display: inline-block;
    max-width: 80%;
    margin: 5px;
  `
  
  export const MessageText = styled.p `
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
    color: ${props => (props.colorWhite ? 'white' : '#353535')};
  
  
     img {
    vertical-align: middle;
  }
  `
  
  export const MessageContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    padding: 0 5%;
    margin-top: 3px;
    justify-content:  ${props => (props.justifyStart ? 'flex-start' : 'flex-end')};
  `
  
export const SentText = styled.p `
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
    
  `
  
