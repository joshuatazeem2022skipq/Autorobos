import React from "react";
import Banner from "../Component/Banner/Banner";
import Services from "../Component/Services";
import QualityCustom from "../Component/Quality";
import QAComponent from "../Component/Q&A";
import ScrollAnimationComponent from "../Animations/ScrollAnimationComponent/ScrollAnimationComponent";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <ScrollAnimationComponent />
      {/* <BackgroundVideo components={[analysisRef, reviewRef, solutionsRef]} /> */}
      <QualityCustom />
      <QAComponent />
    </>
  );
};

export default Home;
