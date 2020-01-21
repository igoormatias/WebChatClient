import styled , {createGlobalStyle}from 'styled-components';



// export default createGlobalStyle 
// `
// html, body {
//     font-family: 'Roboto', sans-serif;
//     padding: 0;
//     margin: 0;
//   }
  
//   #root {
//     height: 100vh;
//   }
  
//   * {
//     box-sizing: border-box;
//   }

//   button:focus {
//     outline: 0;
//   }


//   `
  


export const JoinOuterContainer = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
   
    background-image: linear-gradient(to bottom,  #1C1C1C,#104E8B);

    @media (min-width: 320px) and (max-width: 480px) {
    
      height: 100%;
    }
      
    
`

export const JoinInnerContainer = styled.div `
    width: 30%;

    @media (min-width: 320px) and (max-width: 480px) {
 
        width: 90%;
    }
  
  
  
`


export const JoinInput = styled.input`
border-radius: 5px;
border: none;
margin-top: 20px;
padding: 15px 20px;
width: 100%;
height: 35px;
font-size: 15px;
color: #010101;
text-align:center;
`
   


export const Heading = styled.text `
    color:#FAFAFA;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
    `
   


export const Button = styled.button `
    color: #FAFAFA !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979ff;
    
    border-radius: 5px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    width: 100%;
    height: 40px;
    margin-top: 20px;
    `
    
   
    



    
  
  