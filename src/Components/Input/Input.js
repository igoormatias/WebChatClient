import React  from 'react';

import {Form,InputText,SendButton} from './Styles'

const Input = ({message, setMessage, sendMessage}) => (

    <Form>
        <InputText
        type="text"
        placeholder="Digite uma mensagem"
        value={message}  
        onChange={(e)=> setMessage(e.target.value)}
        onKeyPress={e=> e.key ==='Enter' ? sendMessage(e) : null }
/>
<SendButton onClick={(e)=> sendMessage(e)}>Enviar</SendButton>
    </Form>

)

export default Input;


