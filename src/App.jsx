import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpperNav from "./Components/UpperNav/UpperNav";
import "./Global.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UpperNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
