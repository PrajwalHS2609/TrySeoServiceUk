import React from "react";
import bannerVid from "./../../Img/homeHeaderVid.mp4";
import { Link } from "react-router-dom";
const SeoHeader = () => {
  return (
    <div className="homeHeader">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="homeHeaderCover">
        <div className="homeHeaderWrapper">
          {" "}
          <h1>
            <span> Seo</span> services
          </h1>
          <p>
            Our SEO experts have great innovative, responsive, and analytical
            skills that are all required to develop that one large plan that
            provides results-based performance marketing solutions
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

export default SeoHeader;
