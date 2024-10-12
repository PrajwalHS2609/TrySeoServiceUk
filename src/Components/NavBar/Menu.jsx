import React, { useRef, useState } from "react";
import "./NavBar.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import menuBar from "./../../Img/menu.png";

const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRefHome = useRef();
  let dropRef = useRef();
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      dropRefHome.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      dropRefHome.current.style.display = "none";
      console.log("up");
    }
  };
  return (
    <div className="menuContainer">
      <div className="menuContainerList">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/website-designing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Website
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/seo-services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SEO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/google-ads-service"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Google Ads
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/social-media-marketing-services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Social Media Marketing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/content-writing-service"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Content Writing
          </NavLink>
        </li>
        <li>
          <span className={({ isActive }) => (isActive ? "active" : "")}>
            Other Services
            <FontAwesomeIcon
              icon={faChevronDown}
              className="menuNavDropIcon"
            ></FontAwesomeIcon>
          </span>
          <div className="dropDown" ref={dropRef}>
            <li>
              <NavLink
                to={"/payment-gateway-service"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Payment Gateway
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/email-marketing-service"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Email Marketing
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/sms-and-whatsapp-marketing-services"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SMS & WhatsApp Marketing
              </NavLink>
            </li>
          </div>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </div>
      <div className="respMenuBar">
        <img src={menuBar} alt="menuBar" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <FontAwesomeIcon
          icon={faX}
          className="closeX"
          onClick={hideSideBar}
        ></FontAwesomeIcon>
        <div className="innerRespMenu">
          {" "}
          <div className="innerMenu">
            <li className="">
              <NavLink
                id="menuNavLink"
                to={"/"}
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>{" "}
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={"/website-designing"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Website{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={"/seo-services"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                SEO{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={"/google-ads-service"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Google Ads{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={"/social-media-marketing-services"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Social Media Marketing{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                onClick={hideSideBar}
                to={"/content-writing-service"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Content Writing{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <li className="">
              {" "}
              <span>
                Other Service{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="menuNavDropIcon"
                  onClick={handleDropDown}
                ></FontAwesomeIcon>
              </span>
              <div className="respDropDown" ref={dropRefHome}>
                <li>
                  <NavLink
                    id="menuNavLink"
                    onClick={hideSideBar}
                    to={"/payment-gateway-service"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Payment Gateway{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="menuNavDropIcon"
                    ></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="menuNavLink"
                    onClick={hideSideBar}
                    to={"/email-marketing-service"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Email Marketing{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="menuNavDropIcon"
                    ></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    id="menuNavLink"
                    onClick={hideSideBar}
                    to={"/sms-and-whatsapp-marketing-services"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    SMS Marketing{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="menuNavDropIcon"
                    ></FontAwesomeIcon>
                  </NavLink>
                </li>
              </div>
            </li>
            <li className="">
              {" "}
              <NavLink
                id="menuNavLink"
                to={"/contact-us"}
                onClick={hideSideBar}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
            </li>
            <br />
            {/* -------------------------RespSocialMedia------------------------ */}
            <div className="menuNavSocial">
              <a href="https://www.facebook.com/tryseoservices">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="menuNavIcon"
                ></FontAwesomeIcon>
              </a>
              <a href="https://www.instagram.com/tryseoservices/">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="menuNavIcon"
                ></FontAwesomeIcon>
              </a>
              <a href="https://x.com/tryseoservices">
                {" "}
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="menuNavIcon"
                ></FontAwesomeIcon>
              </a>
              <a href="https://www.youtube.com/@tryseoservices">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="menuNavIcon"
                ></FontAwesomeIcon>
              </a>
              <a href="https://www.linkedin.com/company/tryseoservices/posts/?feedView=all">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="menuNavIcon"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
