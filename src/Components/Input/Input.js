import React  from 'react';

import './Input.css';

const Input = ({message, setMessage, sendMessage}) => (

    <form className="form">
        <input className="input"
        type="text"
        placeholder="Digite uma mensagem"
        value={message}  
        onChange={(e)=> setMessage(e.target.value)}
        onKeyPress={e=> e.key ==='Enter' ? sendMessage(e) : null }
/>
<button className="sendButton" onClick={(e)=> sendMessage(e)}>Enviar</button>
    </form>

)

export default Input;


