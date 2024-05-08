import React, { useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  Chip,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Box,
  CardMedia,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import v1 from "../Images/Aboutus/ils_18.png";
import V2 from "../Images/Aboutus/1jy.jpg";

const YourComponent = () => {
  const content = [
    {
      text: "Learn content by interacting with an expert lesson or watching a video.",
    },
    { text: "Practice what you learned on realistic SAT test questions." },
    { text: "Review your practice questions and learn how to improve." },
  ];

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
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        mb: { md: 0, xs: 5 },
      }}
    >
      <Box
        ref={parallaxRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { md: "100%", sm: "100%", xs: "870px" },
          minHeight: "100%",
          backgroundImage: `url(${V2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)",
          zIndex: -1,
          transition: "background-position 0.1s ease-in-out",
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { md: "100%", xs: "80%" },
              height: { md: "100%", xs: "auto" },
              mt: { md: 10, xs: 5 },
              ml: { xs: 4 },
            }}
          >
            <img src={v1} alt="AUTOROBOS" style={{ maxWidth: "100%" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ ml: { md: 0, xs: 2 } }}>
          <Chip
            label="WHY CHOOSE US"
            variant="outlined"
            sx={{
              backgroundColor: "#f1f4f7",
              color: "#010d4c",
              fontWeight: "bold",
              letterSpacing: 1.5,
              mt: { md: 16, xs: 2 },
            }}
          />
          <Grid container justifyContent="left" alignItems="left">
            <Typography
              variant="h3"
              color="primary"
              align="left"
              sx={{ mt: { md: 4, xs: 2 }, width: { xs: "100%", md: "70%" } }}
            >
              Why
              <b
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "white",
                  color: "white",
                }}
              >
                choose us
              </b>{" "}
              for your business.
            </Typography>
          </Grid>
          {content.map((item, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  maxWidth: { md: "60%", sm: "80%", xs: "96%" },
                  mt: 2,
                  borderRadius: "10px",
                  fontSize: "14px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar>
                      <CheckCircleIcon />
                    </Avatar>
                  }
                  title={item.text}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default YourComponent;
