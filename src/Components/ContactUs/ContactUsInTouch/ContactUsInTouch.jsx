import React from "react";
import ContactUsForm from "./ContactUsForm";
import "./ContactUsInTouch.css"
const ContactUsInTouch = () => {
  return (
    <div className="homeBook" id="ContactUsInTouch">
      <div className="homeBookContent">
        <h3>Get in Touch!</h3>
        <p>
          If you would like to talk to us about your Digital Marketing needs,
          please choose from the options provided.
        </p>
        <p>
          You can call or email a member of our team, we will try to get back to
          you the same day where possible.
        </p>
        <p>
          Complete the contact form and we will email you back or arrange a time
          to talk using our Book A Meetinglink to diarise a time that suits you
          best, we will confirm appointments with you as quickly as possible.
        </p>
        <p>
          We regularly meet with clients in Peterborough, Northampton,
          Stevenage, London, Bedford, Cambridge and Huntingdon as well as
          virtual meetings with many of our clients locally and across the UK
          and Europe. Rest assured, we understand that distance is not a barrier
          to good communication and a great working relationship.
        </p>
        We look forward to hearing from you.
        <button>Book an Meeting</button>
        <br />
        <p>
          Tel: <a href="tel:6360226773">+91 6360226773</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@tryseoservices.com">info@tryseoservices.com</a>
        </p>
      </div>
      <div className="homeBookContent">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsInTouch;
