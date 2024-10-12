import React from "react";
import tracking from "./../../../Img/googleAdsPgImg/footstep.png";
import keywordResearch from "./../../../Img/googleAdsPgImg/magnifying-glass.png";
import competitiveResearch from "./../../../Img/googleAdsPgImg/ads.png";
import txtandImg from "./../../../Img/googleAdsPgImg/hat.png";
import ideas from "./../../../Img/googleAdsPgImg/thinking.png";
import ppcCost from "./../../../Img/googleAdsPgImg/rupee.png";
import adCampaign from "./../../../Img/googleAdsPgImg/wrench.png";
import monthly from "./../../../Img/googleAdsPgImg/speedometer.png";
import WebSiteHowCard from "../../WebsitePage/WebSiteHow/WebSiteHowCard";

const GoogleAdsHowMain = () => {
  return (
    <div className="webSiteHowMain" id="googleHowMain">
      <WebSiteHowCard
        img={keywordResearch}
        alt="Keyword Research and Selection"
        head="Keyword Research and Selection"
      />
      <WebSiteHowCard
        id="colorChange"
        img={competitiveResearch}
        alt="Competitive Research"
        head="Competitive Research"
      />
      <WebSiteHowCard
        img={txtandImg}
        alt="Text and Image Ads Creation"
        head="Text and Image Ads Creation"
      />
      <WebSiteHowCard
        id="colorChange"
        img={ideas}
        alt="Ideas to Optimize Landing Pages"
        head="Ideas to Optimize Landing Pages"
      />
      <WebSiteHowCard
        img={ppcCost}
        alt="PPC Cost Management"
        head="PPC Cost Management"
      />
      <WebSiteHowCard
        id="colorChange"
        img={adCampaign}
        alt="Ad Campaign Modification and Improvements"
        head="Ad Campaign Modification and Improvements"
      />
      <WebSiteHowCard
        img={tracking}
        alt="Conversion Tracking"
        head="Conversion Tracking"
      />
      <WebSiteHowCard
        id="colorChange"
        img={monthly}
        alt="Monthly Performance Report"
        head="Monthly Performance Report"
      />
    </div>
  );
};

export default GoogleAdsHowMain;
