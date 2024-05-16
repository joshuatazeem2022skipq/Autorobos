import React, { useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import V2 from "../Images/Aboutus/jy.jpg";
import Card1Image from "../Images/Aboutus/P3/plexus-abstract-object-07-removebg-preview.png";
import Card2Image from "../Images/Aboutus/P3/plexus-abstract-object-08-removebg-preview.png";
import Card3Image from "../Images/Aboutus/P3/plexus-abstract-object-16-removebg-preview.png";

const AboutUs = () => {
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

  const cardsContent = [
    {
      id: 1,
      title: "Our History",
      description:
        "Except to obtain some advantage from it? But who has any right to find fault with a consequences.",
      image: Card1Image,
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Except to obtain some advantage from it? But who has any right to find fault with a consequences.",
      image: Card2Image,
    },
    {
      id: 3,
      title: "Our Vision",
      description:
        "Except to obtain some advantage from it? But who has any right to find fault with a consequences.",
      image: Card3Image,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Box
        ref={parallaxRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { md: "100%", sm: "100%", xs: "1470px" },
          backgroundImage: `url(${V2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)",
          zIndex: -1,
          mt: -11,
          transition: "background-position 0.1s ease-in-out",
        }}
      />

      <Box
        sx={{
          textAlign: "center",
          color: "#ffffff",
          zIndex: 1,
          padding: "20px",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ mt: 7, mb: 10 }}>
          WELCOME TO AUTOROBOS
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph align="left">
                A dynamic hub of technological expertise at the intersection of
                software and embedded systems. Specializing in IoT, embedded
                systems, AI-driven machine learning, industrial automation, and
                web/app development, we are committed to delivering innovative
                solutions that empower businesses. Our holistic approach
                seamlessly integrates software and embedded systems, providing
                clients with comprehensive, future-ready solutions.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#0ba7a2",
                  border: "1px solid #303030",
                  borderRadius: 13,
                  padding:1,
                  justifyContent :"flex-start",
                  color: "white", 
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "white!important",
                    color: "#0ba7a2",
                  },
                }}
              >
                Request a Consultation
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {cardsContent.map((card) => (
                  <Card
                    key={card.id}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#ffffff",
                      maxWidth: "80%",
                      marginBottom: "20px",
                      width: "100%",
                    }}
                  >
                    <CardContent
                      sx={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px",
                        padding: "20px",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {card.title}
                      </Typography>
                      <Typography variant="body2">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
