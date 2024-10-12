import React from "react";
import HomeWhyUs from "./../HomePage/HomeWhyUs/HomeWhyUs";
import HomeBook from "./../HomePage/HomeBook/HomeBook";
import WebSiteHow from "./WebSiteHow/WebSiteHow";
import WebsiteHeader from "./WebsiteHeader";

const WebsitePage = () => {
  return (
    <div className="homeContainer">
      <WebsiteHeader />
      <WebSiteHow/>
      <HomeWhyUs />
      <HomeBook />
    </div>
  );
};

export default WebsitePage;
