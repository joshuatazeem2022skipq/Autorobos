import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BannerImage from "./BannerImage";
import B from "../../Images/Banner/b7.mp4";
import { useNavigate } from "react-router-dom";
import DayScheduleButton from "../dayschedule";

const BackgroundVideo = ({ videoSrc, children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { md: "102vh", xs: "100vh" },
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 1,
          filter: "brightness(70%)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </Box>
  );
};

const Banner = () => {
  const theme = useTheme();
  const videoSrc = B;
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickProjects = () => {
    navigate("/projects");
  };

  return (
    <Box sx={{ mt: -11 }}>
      <BackgroundVideo videoSrc={videoSrc}>
        <Container>
          <Grid
            container
            spacing={isSmallScreen ? 2 : 4}
            alignItems="center"
            sx={{ minHeight: "100%" }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant={isSmallScreen ? "h2" : "h1"}
                gutterBottom
                align={isSmallScreen ? "center" : "left"}
                sx={{
                  mt: { md: 12, xs: 28 },
                  color: "white",
                  fontWeight: 600,
                  fontFamily: "'Big Shoulders Inline Text', sans-serif",
                  fontOpticalSizing: "auto",
                }}
              >
                ENTER THE WORLD OF INFINITE POSSIBILITIES
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  paddingBottom: 5,
                  justifyContent: isSmallScreen ? "center" : "flex-start",
                  mt: isSmallScreen ? 3 : 5,
                }}
              >
                <Button
                  variant="contained"
                  
                  color="primary"
                  size={isSmallScreen ? "medium" : "large"}
                  onClick={handleClickProjects}
                  sx={{
                    backgroundColor : "transparent!important",
                    marginRight: isSmallScreen ? 0 : 2,
                    border: "2px solid #303030",
                    borderRadius: 13,
                    "&:hover": { backgroundColor: "#5494ff!important" },
                  }}
                >
                  Explore
                </Button>
                <Box>
                  <DayScheduleButton />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <BannerImage />
            </Grid>
          </Grid>

        </Container>
      </BackgroundVideo>
    </Box>
  );
};

export default Banner;
