import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="formMikassa">
    <input
      className="inputMikassa"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event)=>setMessage(event.target.value)} 
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButtonMikassa" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;