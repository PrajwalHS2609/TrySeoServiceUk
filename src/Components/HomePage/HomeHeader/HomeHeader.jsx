import React from "react";
import "./HomeHeader.css";
import bannerVid from "./../../../Img/homeHeaderVid.mp4";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="homeHeaderCover">
        <div className="homeHeaderWrapper">
          {" "}
          <h1>
            From Ground Level to Sky High <span>We Ignite Online Growth</span>
          </h1>
          <p>
            At TrySEOServices, we specialize in transforming businesses with
            powerful digital marketing strategies that take your brand from
            obscurity to online success. Let us help you elevate your business
            and reach new heights with our tailored solutions designed to drive
            growth and visibility in the digital world.
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

export default HomeHeader;
