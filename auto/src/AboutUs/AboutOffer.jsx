import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutOffer = () => {
  const navigate = useNavigate();

  const handleClickProjects = () => {
    navigate("/projects");
  };
  return (
    <Box
      sx={{
        height: "fit-content",
        textAlign: "left",
        background: "#f1f4f7",
        p: 4,
        // borderRadius: 10,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ color: "#010d4c", mb: 2 }}>
          Elevate Your Business with AUTOROBS
        </Typography>
        <Typography variant="body1" sx={{ color: "#37474f", mb: 4 }}>
          AUTOROBS offers comprehensive professional services and best-practice
          process management to optimize your operations, enhance digital
          presence, and drive business growth. If you're looking to elevate your
          business with robotics and digital marketing, it's time to partner
          with AUTOROBS.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickProjects}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default AboutOffer;
