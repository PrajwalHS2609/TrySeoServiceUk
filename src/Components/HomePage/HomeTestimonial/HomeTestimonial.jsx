import React from "react";
import "./HomeTestimonial.css";
// import HomeSqAnim from "../HomeSqAnim";
import HomeTestimonialCarousel from "./HomeTestimonialCarousel";
import HomeTestimonialHeader from "./HomeTestimonialHeader";
const HomeTestimonial = () => {
  return (
    <div className="homeTestimonial">
      <HomeTestimonialHeader />
        <HomeTestimonialCarousel />
    </div>
  );
};

export default HomeTestimonial;
