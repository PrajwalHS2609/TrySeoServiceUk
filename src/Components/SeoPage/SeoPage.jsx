import React from "react";
import SeoHeader from "./SeoHeader";
import HomeWhyUs from "../HomePage/HomeWhyUs/HomeWhyUs";
import HomeBook from "../HomePage/HomeBook/HomeBook";
import SeoHow from "./SeoHow/SeoHow";

const SeoPage = () => {
  return (
    <div className="homeContainer">
      <SeoHeader />
      <SeoHow/>
      <HomeWhyUs />
      <HomeBook />
    </div>
  );
};

export default SeoPage;
