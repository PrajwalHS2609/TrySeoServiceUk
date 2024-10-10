import React from "react";

const HomeBookForm = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="homeBookForm">
      <form action="" onSubmit={handleSubmit}>
        <div className="firstLvl">
          <input type="text" name="" placeholder="*Your Name" />
          <input type="text" name="" placeholder="*Your Email" />
          <input type="text" name="" placeholder="*Your Website" />
        </div>
        <div className="secondLvl">
          <p>*Please choose the Service/s you are interested in:</p>
          <span>
            {" "}
            <div>
              {" "}
              Digital Marketing Support
              <input type="radio" />
            </div>
            <div>
              {" "}
              SEO Services
              <input type="radio" />
            </div>
            <div>
              {" "}
              Google PPC Services
              <input type="radio" />
            </div>
            <div>
              {" "}
              Social Paid Ads
              <input type="radio" />
            </div>
            <div>
              {" "}
              Analysis & Measurement
              <input type="radio" />
            </div>
            <div>
              {" "}
              Web Design
              <input type="radio" />
            </div>
            <div>
              {" "}
              Web DevelopmentWeb Hosting
              <input type="radio" />
            </div>
            <div>
              {" "}
              Web Hosting
              <input type="radio" />
            </div>
          </span>
        </div>
        <button type="submit">Send Form</button>
      </form>
    </div>
  );
};

export default HomeBookForm;
