import React from "react";
import "./HomeService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomeServiceCard = (props) => {
  return (
    <div className="homeServCard">
      <Link>
        <FontAwesomeIcon
          icon={props.icon}
          className="homeServIcon"
        ></FontAwesomeIcon>
        <h5>{props.head}</h5>
        <p>{props.para}</p>
      </Link>
    </div>
  );
};

export default HomeServiceCard;
