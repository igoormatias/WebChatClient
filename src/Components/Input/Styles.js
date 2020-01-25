import styled from 'styled-components'


export const Form = styled.div `
    display: flex;
    border-top: 2px solid #eeee;
    height: 15%;
   
`
export const InputText = styled.input `
    display: flex;
    border: none;
    border-radius:  0;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;
    outline:none;
`

// input:focus, textarea:focus, select:focus {
//     outline: none;
// }

export const SendButton = styled.button `
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    /* background: #2979ff; */
    background-image: linear-gradient(to bottom,  #1C1C1C,#2979FF);
    padding: 20px;
    display: inline-block;
    border: none;
    width: 20%;
    padding:1px;
    `