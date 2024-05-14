import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import Analysis from "../../Component/Analysis"; // Update with your actual component paths
import Review from "../../Component/Review"; // Update with your actual component paths
import Solution from "../../Component/Solutions"; // Update with your actual component paths
import { Box } from "@mui/material";

function ScrollAnimationComponent() {
  const { scrollY } = useViewportScroll();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Define animations based on scroll position
  const x = useTransform(scrollY, [700, 1000], [-150, -50]);

  useEffect(() => {
    setAnimationTriggered(scrollY.current > 400);
  }, [scrollY]);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <video
        src={require("../../Images/Banner/1.mp4")}
        autoPlay
        muted
        loop
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          filter: "brightness(20%)",
          objectFit: "cover",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <motion.div
          style={{ x }}
          initial={{ x: -150 }}
          animate={{ x: animationTriggered ? -50 : -150 }}
        > */}
        <Box sx={{marginTop: -40}}>
          <Analysis />
          </Box>
        {/* </motion.div> */}

        <motion.div
          style={{ x }}
          initial={{ x: -150 }}
          animate={{ x: animationTriggered ? -50 : -150 }}
        >
          <Solution />
        </motion.div>

        <motion.div
          style={{ x }}
          initial={{ x: -150 }}
          animate={{ x: animationTriggered ? -50 : -150 }}
        >
          <Review />
        </motion.div>
      </div>
    </Box>
  );
}

export default ScrollAnimationComponent;
