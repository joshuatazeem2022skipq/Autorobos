// BackgroundVideo.js
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import B from "../Images/Banner/1.mp4";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const scrollPosition = window.scrollY;

      // Calculate the position where each component should become active
      const componentPositions = [
        0,
        video.clientHeight,
        video.clientHeight * 2,
      ];

      // Find the index of the component that should be active based on scroll position
      const currentIndex = componentPositions.findIndex(
        (position, index) =>
          scrollPosition >= position &&
          scrollPosition < position + video.clientHeight
      );

      setActiveIndex(currentIndex === -1 ? 2 : currentIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box component="div" className="background-video">
      <div className="video-container" ref={videoRef}>
        <video autoPlay loop muted className="video">
          <source src={B} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">
        {/* Empty div as a placeholder for each component */}
        <div className={`component ${activeIndex === 0 ? "active" : ""}`}>
          {/* Render your Analysis component here */}
        </div>
        <div className={`component ${activeIndex === 1 ? "active" : ""}`}>
          {/* Render your Review component here */}
        </div>
        <div className={`component ${activeIndex === 2 ? "active" : ""}`}>
          {/* Render your Solutions component here */}
        </div>
      </div>
    </Box>
  );
};

export default BackgroundVideo;
