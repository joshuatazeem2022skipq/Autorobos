import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import DifferentiationSection from "../AboutUs/DifferentiationSection";
import AboutMission from "../AboutUs/AboutMission";
import AboutVision from "../AboutUs/AboutVision";
import Blogs from "../AboutUs/Blogs/Blogs";
import Career from "../AboutUs/Career/Career";

const AboutPage = () => {
  return (
    <>
      <div id="aboutUs">
        <AboutUs />
        <DifferentiationSection />
        <AboutMission />
        <AboutVision />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="career">
        <Career />
      </div>
    </>
  );
};

export default AboutPage;
