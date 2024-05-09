import React from "react";
import Banner from "../Component/Banner/Banner";
import Services from "../Component/Services";
import AboutUs from "../AboutUs/AboutUs";
import QualityCustom from "../Component/Quality";
import DifferentiationSection from "../AboutUs/DifferentiationSection";
import QAComponent from "../Component/Q&A";
import ScrollAnimationComponent from "../Animations/ScrollAnimationComponent/ScrollAnimationComponent";

const Home = () => {
  return (
    <>
      <Banner />
      <DifferentiationSection />
      {/* <AboutUs /> */}
      {/* <Services /> */}
      <ScrollAnimationComponent />
      {/* <BackgroundVideo components={[analysisRef, reviewRef, solutionsRef]} /> */}
      <QualityCustom />
      <QAComponent />
    </>
  );
};

export default Home;
