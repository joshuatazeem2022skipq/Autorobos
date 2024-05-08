import {
  Box,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import B2 from "../Images/B.png";
import MaintenanceVideo from "../Images/12 - Trim.mp4";

const Maintenance = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src={MaintenanceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} textAlign="center">
          <CardMedia
            component={"img"}
            className={`bounce2`}
            src={B2}
            alt="Maintenance Image"
            sx={{
              height: isMobile ? "60px" : "80px",
              width: isMobile ? "100px" : "130px",
              margin: "auto",
            }}
          />
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                className={`animate-charcter`}
                sx={{
                  fontFamily: "initial",
                  textAlign: "center", // Center text on all screens
                }}
              >
                Site Under Maintenance
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                className={`animate-charcter`}
                sx={{ fontFamily: "initial", textAlign: "center" }}
              >
                Sorry for the inconvenience.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant={isMobile ? "body2" : "h5"}
                sx={{
                  mt: isMobile ? 4 : 16,
                  fontFamily: "initial",
                  color: "white",
                  textAlign: "center",
                }}
              >
                To contact us in the meantime, please email at:{" "}
                <a href="mailto:hr@autorobs.com" style={{ color: "white" }}>
                  hr@autorobos.com
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Maintenance;
