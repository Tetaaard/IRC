import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="formWork">
    <input
      className="inputWork"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event)=>setMessage(event.target.value)} 
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButtonWork" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;