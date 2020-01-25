import styled from 'styled-components'


export const InfBar = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to bottom,  #1C1C1C,#2979FF);
    /* background: #2979FF; */
    border-radius: 4px  4px 0 0;
    height: 10px;
    width: 100%;
    padding-bottom:20px;
    padding-top:10px;

`

export const LeftInnerContainer = styled.div `
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
`

export const RightInnerContainer = styled.div `
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
`

export const OnlineIcon = styled.img `
    margin-right: 5%;
`

