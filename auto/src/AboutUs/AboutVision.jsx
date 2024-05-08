import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import A4 from "../Images/Aboutus/36.png";

const AboutVision = () => {
  return (
    <Box
      sx={{
        height: "fit-content",
        background: "#f1f4f7",
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "center" },
            mt: { xs: 4, sm: 6 },
            ml: { md: 13 },
          }}
        >
          <Typography variant="h3" align="left">
            Vision
          </Typography>
          <Typography variant="body1" align="left">
            Our vision is to lead with a team of young minds, offering the world
            innovative and futuristic solutions. We aim to pioneer seamless
            integration of software and embedded systems, unlocking new
            possibilities.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 2, sm: 0 },
          }}
        >
          <img
            src={A4}
            alt="Company Image"
            style={{ width: "70%", height: "auto", maxWidth: "300px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutVision;
