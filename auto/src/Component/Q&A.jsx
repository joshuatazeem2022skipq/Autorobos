import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import BG from "../Images/Projects/09.jpg";

const topics = [
  {
    title: "Boost Your Business with AI?",
    content: "Explore how AUTOROBOS' AI solutions enhance business efficiency.",
  },
  {
    title: "IoT for Seamless Connectivity?",
    content: "Discover AUTOROBOS' IoT solutions for improved connectivity.",
  },
  {
    title: "Tailored Embedded Systems?",
    content:
      "Learn how AUTOROBOS creates customized embedded systems for specific industries.",
  },
  {
    title: "Digital Marketing Mastery?",
    content:
      "Unleash AUTOROBOS' strategies for maximizing online visibility and business growth.",
  },
  {
    title: "Unified Web & Graphics Services?",
    content:
      "Experience AUTOROBOS' expertise in creating a cohesive online presence through web development and graphics.",
  },
];

const QAComponent = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState("panel0"); // Open the first Accordion by default

  const handleClickContact = () => {
    navigate("/contactUs");
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: "#0b0c10" }}>
      <Container
        sx={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "1px solid #303030",
          backgroundAttachment: "fixed", // Make background image fixed
          height: "70vh",
          "@media (max-width: 600px)": {
            height: "79vh",
            ml: 1,
          },
          minWidth: "95%",
          borderRadius: 7,
          py: 4,
        }}
      >
        <Grid container sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <Chip
              label="QUESTIONS & ANSWERS"
              variant="outlined"
              sx={{
                backgroundColor: "transpparent",
                color: "#0ba7a2",
                border: "1px solid #303030",
                padding: 3,
                fontWeight: "bold",
                borderRadius: 13,
                letterSpacing: 1.5,
                filter: "brightness(150%)",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container
                sx={{
                  ml: { xs: 2, md: 0 },
                  width: { md: "100%", xs: "95%" },
                }}
              >
                <Typography
                  variant="h2"
                  align="left"
                  sx={{
                    mt: 2,
                    fontFamily: "inherit",
                    fontWeight: 500,
                    color: "white",
                    width: { md: "80%", xs: "90%" },
                  }}
                >
                  Any Questions?
                </Typography>
                <Typography
                  variant="h2"
                  align="left"
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: 500,
                    color: "white",
                    width: { md: "70%", xs: "90%" },
                  }}
                >
                  Find here.
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    mt: 1,
                    fontFamily: "inherit",
                    fontWeight: 320,
                    width: { md: "50%", xs: "70%" },
                    color: "GrayText",
                  }}
                >
                  Don’t find your answer here? Just send us a message for any
                  query.
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#ContactForm"
                    size="large"
                    onClick={handleClickContact}
                    sx={{
                      backgroundColor: "#0ba7a2",
                      border: "2px solid #303030",
                      borderRadius: 13,
                      "&:hover": {
                        backgroundColor: "white!important",
                        color: "#0ba7a2",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {topics.map((topic, index) => (
              <Container key={index}>
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mt: 2,
                    border: "1px solid #303030",
                    backgroundColor: "#bab7c6",
                    color: "black",
                    width: { md: "85%", xs: "100%" },
                    borderRadius: "7px!important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography variant="body1">{topic.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{topic.content}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Container>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QAComponent;
