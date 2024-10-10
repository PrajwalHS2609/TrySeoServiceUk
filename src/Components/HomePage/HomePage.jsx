import React from "react";
import "./HomePage.css";
import HomeService from "./HomeService/HomeService";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeBook from "./HomeBook/HomeBook";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeWhyUs from "./HomeWhyUs/HomeWhyUs";
import HomeHeader from "./HomeHeader/HomeHeader";
const HomePage = () => {
  return (
    <div className="homeContainer">
      <HomeHeader/>
      <HomeService />
      <HomeWhyUs/>
      <HomeTestimonial/>
      <HomeBook/>
      <WebsiteClient />
    </div>
  );
};

export default HomePage;
