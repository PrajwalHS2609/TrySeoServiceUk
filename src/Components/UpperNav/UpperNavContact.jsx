import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const UpperNavContact = () => {
  return (
    <div className="upperNavContact">
      <div className="upperNavContact-content">
        {" "}
        <FontAwesomeIcon
          icon={faEnvelope}
          className="upperNavIcon"
        ></FontAwesomeIcon>
        <a href="mailto:info@tryseoservices.com">info@tryseoservices.com</a>
      </div>
      <div className="upperNavContact-content2">
        {" "}
        <FontAwesomeIcon
          icon={faPhone}
          className="upperNavIcon"
        ></FontAwesomeIcon>
        <a href="tel:91 6360226773">+91 6360226773</a>
      </div>
    </div>
  );
};

export default UpperNavContact;
