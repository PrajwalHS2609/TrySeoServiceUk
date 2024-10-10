import React from "react";
import "./HomeBook.css";
import HomeBookForm from "./HomeBookForm";
const HomeBook = () => {
  return (
    <div className="homeBook">
      <div className="homeBookContent">
        <h3>Get in Touch!</h3>
        <p>
          If our approach to Digital Marketing sounds like the right fit for you
          and your marketing team, or you want to know more about how we can
          help you to achieve your online goals then please get in touch by
          either filling in our form, booking an initial meeting, emailing or
          calling us using the details below.
        </p>
        <button>Book an Meeting</button>
        <br />
        <p>
          Tel: <a href="tel:6360226773">+91 6360226773</a>
        </p>
        <p>
          Email: <a href="mailto:info@tryseoservices.com">info@tryseoservices.com</a>
        </p>
      </div>
      <div className="homeBookContent">
        <HomeBookForm/>
      </div>
    </div>
  );
};

export default HomeBook;
