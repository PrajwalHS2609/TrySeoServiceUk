import React from "react";
import GoogleAdsHow from "./GoogleAdsHow/GoogleAdsHow";
import GoogleAdsHeader from "./GoogleAdsHeader";
import HomeWhyUs from "../HomePage/HomeWhyUs/HomeWhyUs";
import HomeBook from "../HomePage/HomeBook/HomeBook";

const GoogleAdsPage = () => {
  return (
    <div className="homeContainer">
      <GoogleAdsHeader />
      <GoogleAdsHow />
      <HomeWhyUs />
      <HomeBook />
    </div>
  );
};

export default GoogleAdsPage;
