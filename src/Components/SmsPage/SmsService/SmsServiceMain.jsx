import React from "react";
import WebSiteHowCard from "../../WebsitePage/WebSiteHow/WebSiteHowCard";
import campaign from "./../../../Img/smsPgImg/edit.png";
import segmentation from "./../../../Img/smsPgImg/group.png";
import testing from "./../../../Img/smsPgImg/ab-testing.png";
import analytics from "./../../../Img/smsPgImg/bar-chart.png";

const SmsServiceMain = () => {
  return (
    <div className="webSiteHowMain">
      <WebSiteHowCard
        img={campaign}
        alt="Campaign Creation"
        head="Campaign Creation"
        para="We design and execute SMS and WhatsApp campaigns that are tailored to your goals, visually appealing, and designed to drive results."
      />
      <WebSiteHowCard
        id="colorChange"
        img={segmentation}
        alt="Segmentation"
        head="Segmentation"
        para="We segment your contact lists to ensure that the right messages are delivered to the right people, increasing open and response rates."
      />
      <WebSiteHowCard
        img={testing}
        alt="A/B Testing"
        head="A/B Testing"
        para="We conduct A/B tests to optimize content, timing, and strategies, ensuring that your campaigns achieve the best possible results."
      />
      <WebSiteHowCard
        id="colorChange"
        img={analytics}
        alt="Analytics and Reporting"
        head="Analytics and Reporting"
        para="We provide comprehensive insights into your campaign performance, allowing you to understand what's working and where improvements can be made."
      />
    </div>
  );
};

export default SmsServiceMain;
