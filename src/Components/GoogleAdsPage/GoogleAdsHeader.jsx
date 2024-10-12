import React from "react";
import bannerVid from "./../../Img/homeHeaderVid.mp4";
import { Link } from "react-router-dom";
const GoogleAdsHeader = () => {
  return (
    <div className="homeHeader">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="homeHeaderCover">
        <div className="homeHeaderWrapper">
          {" "}
          <h1>
            <span>Google Ads</span> Specialist
          </h1>
          <p>
            We assists you in ranking your company, products, and services on
            the first pages of Google search results. Because search engines
            have become an integral element of the modern consumer’s buying
            process, an increasing number of businesses are opting to invest in
            Google Ads.
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

export default GoogleAdsHeader;
