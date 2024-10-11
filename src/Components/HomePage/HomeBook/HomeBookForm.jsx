import React from "react";

const HomeBookForm = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="homeBookForm">
      <form action="" onSubmit={handleSubmit}>
        <div className="firstLvl">
          <input type="text" name="" id="" placeholder="*Your Name" />
          <input type="text" name="" id="" placeholder="*Your Email" />
          <input type="text" name="" id="" placeholder="*Your Website" />
        </div>
        <div className="secondLvl">
          <p>*Please choose the Service/s you are interested in:</p>

          <span>
            {" "}
            Digital Marketing Support <input type="radio" />
          </span>
          <span>
            {" "}
            Google PPC Services <input type="radio" />
          </span>
          <span>
            {" "}
            Analysis & Measurement <input type="radio" />
          </span>
          <span>
            {" "}
            SEO Services <input type="radio" />
          </span>
          <span>
            Social Paid Ads <input type="radio" />
          </span>
          <span>
            Web DevelopmentWeb Hosting <input type="radio" />
          </span>
          <span>
            {" "}
            Web Hosting <input type="radio" />
          </span>
          <span>
            {" "}
            Web Design
            <input type="radio" />
          </span>
        </div>
        <button type="submit">Send Form</button>
      </form>
    </div>
  );
};

export default HomeBookForm;
