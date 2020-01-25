import styled from 'styled-components'


export const OuterContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    

    @media (min-width: 320px) and (max-width: 480px) {
    
      height: 100%;
    }

 
    
  `
  
  export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 8px;
    height: 60%;
    width: 35%;

    @media (min-width: 320px) and (max-width: 568px) {
    
        width: 100%;
        height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
     
      width: 60%;
    }
    
    
    
  `
  

  
 
  
