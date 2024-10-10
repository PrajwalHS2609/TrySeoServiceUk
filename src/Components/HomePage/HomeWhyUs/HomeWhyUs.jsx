import React from "react";
import "./HomeWhyUs.css";
import { Link } from "react-router-dom";
const HomeWhyUs = () => {
  return (
    <div className="homeWhyUs">
      <div className="homeWhyUsContent1">
        <img src="https://w2m.co.uk/wp-content/uploads/2023/03/10.png" alt="" />
      </div>
      <div className="homeWhyUsContent2">
        <h3>Online Growth</h3>
        <p>
          Working with your Digital Marketing Team we will provide support and
          expert advice on digital marketing strategy, action value,
          amplification & measurement to help your business to thrive online.
        </p>
        <br />
        <h3>Closing the Loop</h3>
        <p>
          Closing the loop and identifying value in digital marketing activities
          is a vital part of any online strategy, yet often forgotten.
          Understand the results you are getting and make the right choices for
          your digital marketing budget.
        </p>
        <br />
        <Link to={"/"}>
          <button>Let's Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeWhyUs;
