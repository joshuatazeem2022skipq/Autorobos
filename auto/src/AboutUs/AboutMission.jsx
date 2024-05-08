import React, { useEffect, useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import A3 from "../Images/Aboutus/P3/plexus-abstract-object-08-removebg-preview.png";
import V2 from "../Images/Aboutus/1jy.jpg";

const AboutMission = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxEffect = () => {
      if (parallaxRef.current) {
        const yOffset = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${yOffset * 0.5}px`;
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <Box
      ref={parallaxRef}
      sx={{
        backgroundImage: `url(${V2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "30px",
        height: { xs: "auto", md: "400px" },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: { xs: 4, md: 0 },
              mt: { md: 10 },
            }}
          >
            <img
              src={A3}
              alt="Company Image"
              style={{ width: "100%", height: "auto", maxWidth: "300px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" align="left" sx={{ mt: { xs: 2, md: 0 } }}>
              Our Mission
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: 2 }}>
              Our goal is to replace outdated practices with cutting-edge
              approaches, shaping a technological landscape that's not only
              advanced but also transformative and forward-thinking.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMission;
