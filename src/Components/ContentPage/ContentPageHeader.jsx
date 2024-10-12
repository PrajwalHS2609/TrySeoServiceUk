import React from "react";
import bannerVid from "./../../Img/homeHeaderVid.mp4";
import { Link } from "react-router-dom";
const ContentPageHeader = () => {
  return (
    <div className="homeHeader">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="homeHeaderCover">
        <div className="homeHeaderWrapper">
          {" "}
          <h1>
            Are you looking for the best <span>Content Writing services</span>?
          </h1>
          <p>
            Content is rightly regarded as the king of the marketing industry,
            as it is the only factor that contributes to the development of a
            strong online persona on search engines.
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

export default ContentPageHeader;
