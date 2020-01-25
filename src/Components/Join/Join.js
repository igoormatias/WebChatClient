import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { FaUser} from 'react-icons/fa';

import {
   
    JoinOuterContainer,
    JoinInnerContainer,
    JoinInput,
    Button,
    Heading
   } from './Styles'





const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
     
    return (
      <JoinOuterContainer>
          <JoinInnerContainer>
             <Heading>Web Chat</Heading>
              <div>
                 <JoinInput 
                 leftIcon={FaUser}
                 placeholder="Digite seu nome" type="text" onChange={(e)=> setName(e.target.value)}/>
             </div>
              <div>
                  <JoinInput placeholder="Digite o nome da sala" type="text" onChange={(e)=> setRoom(e.target.value)}/>
            </div>
              <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}
             >
              <div><Button  
             type="submit">Entrar</Button></div>
              </Link>
              <Button style={{background:'red'}}>Cadastre-se</Button>
          </JoinInnerContainer>
          </JoinOuterContainer>
    )
}

export default Join;