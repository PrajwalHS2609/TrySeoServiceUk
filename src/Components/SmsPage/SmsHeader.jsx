import React from "react";
import bannerVid from "./../../Img/homeHeaderVid.mp4";
import { Link } from "react-router-dom";
const SmsHeader = () => {
  return (
    <div className="homeHeader">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="homeHeaderCover">
        <div className="homeHeaderWrapper">
          {" "}
          <h1>
            <span>SMS</span> & <span>What'sApp</span> Marketing Services
          </h1>
          <p>
            In the bustling city of Bangalore, where innovation and technology
            converge, businesses are constantly on the lookout for new and
            effective ways to connect with their audience. Enter
            TrySEOServices.com, your digital marketing ally, here to shine a
            light on how our SMS and WhatsApp Marketing Services in Bangalore
            are transforming the way businesses engage, inform, and drive growth
            in this vibrant tech hub.
          </p>
          <div className="homeHeaderBtn">
            {" "}
            <Link to={"/"}>
              <button>Our Services</button>
            </Link>
            <a href="tel:">
              <button>Speak To Expert</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsHeader;
