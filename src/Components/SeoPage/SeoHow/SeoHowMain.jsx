import React from "react";
import WebSiteHowCard from "../../WebsitePage/WebSiteHow/WebSiteHowCard";
import visibility from "./../../../Img/seoPgImg/binoculars.png";
import webTraffic from "./../../../Img/seoPgImg/traffic-light.png";
import trustWorthy from "./../../../Img/seoPgImg/handshake.png";
import growth from "./../../../Img/seoPgImg/grow.png";
const SeoHowMain = () => {
  return (
    <div className="webSiteHowMain">
      <WebSiteHowCard
        img={visibility}
        alt="Visibility & Rankings"
        head="Visibility & Rankings"
        para="Users are more likely to choose one of the top five choices available by a search engine while looking for a service or product online. SEO services in Bangalore help you rank higher in search results and gain greater online visibility, increasing the chances that potential customers will visit your site and convert."
      />
      <WebSiteHowCard
        id="colorChange"
        img={webTraffic}
        alt="Web Traffic"
        head="Web Traffic"
        para="SEO enhances organic search engine traffic, which boosts the number of daily visits to your page. Because the more relevant people that visit your site, the more probable you are to offer to them, you will see an increase in sales immediately."
      />
      <WebSiteHowCard
        img={trustWorthy}
        alt="Trustworthy"
        head="Trustworthy"
        para="The higher you rank on search engines like Google, the better your SEO score is. The improved visibility from higher Google ranks is great to each brand, the trust you develop with potential clients is a secondary advantages."
      />
      <WebSiteHowCard
        id="colorChange"
        img={growth}
        alt="Growth"
        head="Growth"
        para="The importance of SEO in the development of your brand cannot be overstated. A well-optimized website has a higher chance of attracting new visitors and increasing sales. Our SEO services in Bangalore share your brand across other social platforms like Facebook or Instagram."
      />
    </div>
  );
};

export default SeoHowMain;
