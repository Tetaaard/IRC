import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Message = ({ message: { text, user , date}, name }) => {
  let isSentByCurrentUser = false;

  function getDate(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (hour.toString().length == 1) {
      hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
      minute = '0' + minute;
    }
    return date = hour + 'h' + minute;
  }

  var date = getDate();
  const trimmedName = name.trim().toLowerCase();
  
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }
  
  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainerWork justifyEnd">
          <p className="sentTextWork pr-10">{trimmedName}</p>
          <div className="messageBoxWork backgroundSalmonWork">
            
            <p className="messageTextWork colorWhiteWork">{ReactEmoji.emojify(text)}</p>
            <div class="timeWork"> <AiOutlineClockCircle /> {date} </div> 

          </div>
        </div>
        )
        : (
          <div className="messageContainerWork justifyStart">
            <div className="messageBoxWork backgroundLightWork">
              <p className="messageTextWork colorDarkWork">{ReactEmoji.emojify(text)}</p>
              <div class="timeWork"> <AiOutlineClockCircle /> {date} </div> 
            </div>
            <p className="sentTextWork pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;