import React from "react";
import "./ContactUs.css";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import ContactUsHeader from "./ContactUsHeader/ContactUsHeader";
import Map from "./Map/Map";
import ContactUsInTouch from "./ContactUsInTouch/ContactUsInTouch";
const ContactUs = () => {
  return (
    <div className="homeContainer">
      <ContactUsHeader/>
      <Map/>
      <ContactUsInTouch/>
      <HomeTestimonial />
    </div>
  );
};

export default ContactUs;
