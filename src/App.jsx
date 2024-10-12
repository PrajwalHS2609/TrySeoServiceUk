import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpperNav from "./Components/UpperNav/UpperNav";
import "./Global.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import WebsitePage from "./Components/WebsitePage/WebsitePage";
import SeoPage from "./Components/SeoPage/SeoPage";
import GoogleAdsPage from "./Components/GoogleAdsPage/GoogleAdsPage";
import ContentPage from "./Components/ContentPage/ContentPage";
import SmsPage from "./Components/SmsPage/SmsPage";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTo />
        <UpperNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/website-designing" element={<WebsitePage />} />
          <Route path="/seo-services" element={<SeoPage />} />
          <Route path="/google-ads-service" element={<GoogleAdsPage />} />
          <Route path="/content-writing-service" element={<ContentPage />} />
          <Route
            path="/sms-and-whatsapp-marketing-services"
            element={<SmsPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
