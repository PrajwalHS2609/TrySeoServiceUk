import React from "react";
import "./WebSiteHow.css";
const WebSiteHowCard = (props) => {
  return (
    <div className="webSiteHowCard">
      <div className="webSiteHowImg">
        <img src={props.img} alt={props.alt} />
        <div className="webSiteHowImgCover" id={props.id}></div>
      </div>
      <h3>{props.head}</h3>
      <p>{props.para}</p>
    </div>
  );
};

export default WebSiteHowCard;
