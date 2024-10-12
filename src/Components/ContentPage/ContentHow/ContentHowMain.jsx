import React from "react";
import WebSiteHowCard from "../../WebsitePage/WebSiteHow/WebSiteHowCard";
import highCtr from "./../../../Img/contentPgImg/cursor.png";
import backLinks from "./../../../Img/contentPgImg/link.png";
import incorporate from "./../../../Img/contentPgImg/thunder.png";
import userExperience from "./../../../Img/contentPgImg/smile.png";

const ContentHowMain = () => {
  return (
    <div className="webSiteHowMain">
      <WebSiteHowCard
        img={highCtr}
        alt="Generates High CTR"
        head="Generates High CTR"
        para="Google considers your click-through rate (CTR) as an essential factor to rank your website – the more people who click on your links, the higher your chances of achieving better search engine ranks."
      />
      <WebSiteHowCard
        id="colorChange"
        img={backLinks}
        alt="Generate Backlinks"
        head="Generate Backlinks"
        para="The high-quality backlinks imply credibility and trust for Google. The more quality backlinks you have, the greater you are likely to rank on Google."
      />
      <WebSiteHowCard
        img={incorporate}
        alt="Enables you to Incorporate Keywords"
        head="Enables you to Incorporate Keywords"
        para="Quality content is the only way to ensure that you can effectively use your keywords. This will enable you to compete with other brands in your industry."
      />
      <WebSiteHowCard
        id="colorChange"
        img={userExperience}
        alt="Offers a Great User Experience"
        head="Offers a Great User Experience"
        para="SEO comprises several strategies like generating backlinks, writing quality content, and using good keywords, and users can navigate easily."
      />
    </div>
  );
};

export default ContentHowMain;
