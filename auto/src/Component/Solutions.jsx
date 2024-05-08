import {
  CardMedia,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import S1 from "../Images/Progress/ils_06.svg";
import S3 from "../Images/Progress/ils_06_3.svg";
import { Box } from "@mui/system";
import "../Styles/Gobal.css";

const Solutions = () => {
  const [skillProgress, setSkillProgress] = useState(73);
  const [performanceProgress, setPerformanceProgress] = useState(91);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const skillProgressValue = Math.min(
        Math.floor((scrollPosition / 300) * 73),
        73
      );
      const performanceProgressValue = Math.min(
        Math.floor((scrollPosition / 300) * 91),
        91
      );

      setSkillProgress(skillProgressValue);
      setPerformanceProgress(performanceProgressValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Grid container sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Chip
            label="BEST AUTOMATION SOLUTION"
            variant="outlined"
            sx={{
              backgroundColor: "#e6ecff",
              color: "#5497ff",
              fontWeight: "bold",
              letterSpacing: 1.5,
              border: "none",
              mt: { md: 5, xs: 16 },
              mb: 2,
              ml: { xs: 10, md: 33, sm: 13.5 },
            }}
          />
          <Container
            sx={{
              ml: { xs: 9, md: 30, sm: 11 },
              // border: "1px solid black",
              width: { md: "100%", xs: "90%" },
              // border: "2px solid white",
            }}
          >
            <Typography
              variant="h2"
              align="left"
              sx={{
                mt: 2,
                fontFamily: "inherit",
                fontWeight: 500,
                color: "whitesmoke",
                width: { md: "70%", xs: "90%" },
              }}
            >
              Why you should choose us?
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                mt: 1,
                fontFamily: "inherit",
                fontWeight: 320,
                width: { md: "50%", xs: "70%" },
                color: "#96a6b6",
              }}
            >
              Tell us about your product, and we will give you expert
              assistance.
            </Typography>
            <Box sx={{ mt: 2, width: "98%" }}>
              <Typography align="left" sx={{ color: "#ced5dd" }}>
                SKILL
              </Typography>
              <Typography variant="caption" align="center" mt={1}>
                {`${skillProgress}%`}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skillProgress}
                sx={{
                  width: { md: "60%", xs: "70%" },
                  height: "6px",
                  borderRadius: "10px",

                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#f25dff",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 2, width: "98%" }}>
              <Typography align="left" sx={{ color: "#ced5dd" }}>
                PERFORMANCE
              </Typography>
              <Typography variant="caption" align="center" mt={2}>
                {`${performanceProgress}%`}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={performanceProgress}
                sx={{
                  width: { md: "60%", xs: "70%" },
                  height: "6px",
                  borderRadius: "10px",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#00e8fa",
                  },
                }}
              />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", md: "680px", sm: "500px" },
              width: { xs: "370px", md: "680px", sm: "500px" },
            }}
          >
            <CardMedia
              component="img"
              alt="Background Image"
              height="100%"
              width="100%"
              image={S1}
              sx={{
                position: "absolute",
                top: 0,
                left: { xs: "12%", md: "0", sm: "35%" },
                mt: { xs: 20, md: -6 },
              }}
            />
            <CardMedia
              component="img"
              alt="Image Alt Text"
              height={{ xs: "80px", md: "230px" }}
              image={S3}
              sx={{
                width: { xs: "16%", md: "18%", sm: "20%" },
                position: "absolute",
                top: { xs: "53%", md: "0%", sm: "38%" },
                left: { xs: "32%", md: "18%", sm: "57%" },
                transform: "translate(-50%, -50%)",
              }}
              className={`bounce`}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
