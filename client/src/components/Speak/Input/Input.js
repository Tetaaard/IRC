import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="formSpeak">
    <input
      className="inputSpeak"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event)=>setMessage(event.target.value)} 
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButtonSpeak" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;