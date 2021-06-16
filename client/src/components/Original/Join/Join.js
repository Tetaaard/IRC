import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function Join(){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    return (
      <div className="joinOuterContainerOriginal">
        <div className="joinInnerContainerOriginal">
          <h1 className="title">Welcome on Little Tattle !</h1>
          <div className="inputsOriginal"> 
            <input placeholder="What's your nickname ?" className="joinInputOriginal" type="text" onChange={(event) => setName(event.target.value)} />
            <input placeholder="What's your private room ?" className="joinInputOriginal" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatOriginal?name=${name}&room=${room}`}>
            <button className={'buttonOriginal mt-20'} type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    )
}

