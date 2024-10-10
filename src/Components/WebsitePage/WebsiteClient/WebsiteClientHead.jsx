import React from "react";
import "./WebsiteClient.css";
import { Link } from "react-router-dom";
const WebsiteClientHead = () => {
  return (
    <div className="websiteClientHead">
      <h2>
      Our work
      </h2>
      <p>  Take a look at our latest projects, <Link to={"/contact-us"}>get in touch</Link> to find out how we can
      help with your online visibility.</p>
    </div>
  );
};

export default WebsiteClientHead;
