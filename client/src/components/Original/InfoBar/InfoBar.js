import React from 'react';
import onlineIcon from '../../../icons/onlineIcon.png';
import closeIcon from '../../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBarOriginal">
      <div className="leftInnerContainerOriginal">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{ room }</h3>
      </div>
      <div className="rightInnerContainerOriginal">
        <a href="/"><img src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
  
  export default InfoBar;