import React from "react";
import "./HomePage.css";
import HomeService from "./HomeService/HomeService";
import WebsiteClient from "./../WebsitePage/WebsiteClient/WebsiteClient";
import HomeBook from "./HomeBook/HomeBook";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeWhyUs from "./HomeWhyUs/HomeWhyUs";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <div className="homeContainer">
      <HomeService />
      <HomeWhyUs/>
      <HomeTestimonial/>
      <HomeBook/>
      <WebsiteClient />
      <Footer/>
    </div>
  );
};

export default HomePage;
