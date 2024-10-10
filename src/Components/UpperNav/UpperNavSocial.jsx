import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const UpperNavSocial = () => {
  return (
    <div className="upperNavSocial">
      <a href="https://www.facebook.com/tryseoservices">
        {" "}
        <FontAwesomeIcon
          icon={faFacebook}
          className="upperNavIcon"
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.instagram.com/tryseoservices/">
        {" "}
        <FontAwesomeIcon
          icon={faInstagram}
          className="upperNavIcon"
        ></FontAwesomeIcon>
      </a>
      <a href="https://x.com/tryseoservices">
        {" "}
        <FontAwesomeIcon
          icon={faXTwitter}
          className="upperNavIcon"
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.youtube.com/@tryseoservices">
        <FontAwesomeIcon
          icon={faYoutube}
          className="upperNavIcon"
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.linkedin.com/company/tryseoservices/posts/?feedView=all">
        {" "}
        <FontAwesomeIcon
          icon={faLinkedin}
          className="upperNavIcon"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default UpperNavSocial;
