import React from "react";
import "./WebSiteHow.css";
import WebSiteHowCard from "./WebSiteHowCard";
import solidWebsite from "./../../../Img/websitePgImg/shield.png";
import buildTrust from "./../../../Img/websitePgImg/planet-earth.png";
import usability from "./../../../Img/websitePgImg/mouse.png";
import mobileDesign from "./../../../Img/websitePgImg/smartphone.png";

const WebSiteHowMain = () => {
  return (
    <div className="webSiteHowMain">
      <WebSiteHowCard
        img={solidWebsite}
        alt="A Solid Website"
        head="A Solid Website"
        para="The initial step to a lead generation website is a website that actually works. We provide website designing in Bangalore that is responsive, open in quick time, & gets the amount of traffic you require to convert quality leads."
      />
      <WebSiteHowCard
        id="colorChange"
        img={buildTrust}
        alt="Build Trust"
        head="Build Trust"
        para="The website development in Bangalore exhibits visitors to your site (people who are nowhere near making a purchasing decision) that you are a legitimate company with authority in your industry."
      />
      <WebSiteHowCard
        img={usability}
        alt="Usability"
        head="Usability"
        para="We offer a web design service in Bangalore that enables the audience to find information on your website by clicking on navigational links, filling out inquiry forms, zooming in on details of product images, & more."
      />
      <WebSiteHowCard
        id="colorChange"
        img={mobileDesign}
        alt="Mobile Design"
        head="Mobile Design"
        para="Our website development in Bangalore allows mobile users a top-flight experience. When mobile users access the Internet, they are more likely to be in decision mode than research mode, since research is more conveniently undertaken on a desktop, where different browser windows and documents can be seen same time."
      />
    </div>
  );
};

export default WebSiteHowMain;
