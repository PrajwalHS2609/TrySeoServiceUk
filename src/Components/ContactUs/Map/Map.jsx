import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <div className="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8494249.013181724!2d74.80153594091229!3d14.720462796851661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176bdd443f25%3A0xb406c88371b54109!2sTrySEOServices.Com!5e0!3m2!1sen!2sin!4v1728716073320!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
