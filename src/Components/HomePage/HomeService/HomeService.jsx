import React from "react";
import "./HomeService.css";
import HomeServiceCard from "./HomeServiceCard";
import {
  faMagnifyingGlass,
  faTv,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const HomeService = () => {
  return (
    <div className="homeSerContainer">
      <HomeServiceCard
      link="/social-media-marketing-services-in-bangalore"
        icon={faMagnifyingGlass}
        head="SEO"
        para="In today's digital environment, SEO ensures increased conversions and aids in the growth of your company. Your company can rank on the first page of the SERP if you use the appropriate SEO tactics."
      />
      <HomeServiceCard
      link="/google-ads-service-in-bangalore"
        icon={faGoogle}
        head="Google AdsWebsite Design"
        para="We ensure that your budget is managed and that your paid marketing Google Ad campaigns are boosted. A good keyword strategy combined with in-depth keyword research will help you get more customers."
      />
      <HomeServiceCard
      link="/website-designing-services-in-bangalore"
        icon={faTv}
        head="Website Design"
        para="A responsive and mobile-friendly web design ensures that your website and applications are easy to use and adjust to different screen sizes and displays."
      />
      <HomeServiceCard
      link="/content-writing-service-in-bangalore"
        icon={faPenToSquare}
        head="Content Writing"
        para="Content is rightly regarded as the king of the marketing industry, as it is the only factor that contributes to the development of a strong online persona on search engines."
      />
    </div>
  );
};

export default HomeService;
