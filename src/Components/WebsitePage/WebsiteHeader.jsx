import React from "react";
import bannerVid from "./../../Img/homeHeaderVid.mp4";
import { Link } from "react-router-dom";

const WebsiteHeader = () => {
  return (
    <div className="homeHeader">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="homeHeaderCover">
        <div className="homeHeaderWrapper">
          {" "}
          <h1>
            <span> Website Designing</span> services
          </h1>
          <p>
            For High Quality Traffic, Qualified Leads, Online Sales, Maximum
            Reach, & Search Ranking.
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

export default WebsiteHeader;
