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
        <div className="messageContainerDark justifyEnd">
          <p className="sentTextDark pr-10">{trimmedName}</p>
          <div className="messageBoxDark backgroundSalmonDark">
            
            <p className="messageTextDark colorWhiteDark">{ReactEmoji.emojify(text)}</p>
            <div class="timeDark"> <AiOutlineClockCircle /> {date} </div> 

          </div>
        </div>
        )
        : (
          <div className="messageContainerDark justifyStart">
            <div className="messageBoxDark backgroundLightDark">
              <p className="messageTextDark colorDarkDark">{ReactEmoji.emojify(text)}</p>
              <div class="timeDark"> <AiOutlineClockCircle /> {date} </div> 
            </div>
            <p className="sentTextDark pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;