import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const FooterServices = () => {
  return (
    <div className="footerServices">
      <h5>Recent News</h5>
        <li><Link to={"/"}>Newsletter – Digital Marketing Update – July 2024</Link></li>
        <li><Link to={"/"}>Online Brand Reputation Management</Link></li>
        <li><Link to={"/"}>One Minute Marketing – Conversion Marketing</Link></li>
        <li><Link to={"/"}>Tips to Improve Your Website – Tip #4</Link></li>
    </div>
  );
};

export default FooterServices;
