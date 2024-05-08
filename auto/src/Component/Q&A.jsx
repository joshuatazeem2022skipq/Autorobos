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
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

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

  const handleClickContact = () => {
    navigate("/contactUs");
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#f1f4f7", minHeight: "70vh", py: 4 }}>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={12} md={6}>
            <Chip
              label="QUESTIONS & ANSWERS            "
              variant="outlined"
              sx={{
                backgroundColor: "#e6ecff",
                color: "#5497ff",
                fontWeight: "bold",
                letterSpacing: 1.5,
                border: "none",
                mt: 1,
                ml: { xs: 4, md: 20 },
              }}
            />
            <Container
              sx={{
                ml: { xs: 2, md: 17 },
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
                  color: "#1a1a1a",
                  width: { md: "70%", xs: "90%" },
                }}
              >
                Any Questions?
              </Typography>
              <Typography
                variant="h2"
                align="left"
                sx={{
                  mt: 2,
                  fontFamily: "inherit",
                  fontWeight: 500,
                  color: "#1a1a1a",
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

              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="#ContactForm"
                  size="large"
                  onClick={handleClickContact}
                  sx={{
                    marginRight: 2,
                    "&:hover": { backgroundColor: "#FF7A41" },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12} md={6}>
            {topics.map((topic, index) => (
              <Container>
                <Accordion
                  key={index}
                  sx={{
                    mt: 2,
                    border: "1px solid #729dff",
                    backgroundColor: "#e6ecff",
                    color: "#1a1a1a",
                    width: { md: "85%", xs: "100%" },
                    borderRadius: "7px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#1a1a1a" }} />}
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
      </Box>
    </>
  );
};

export default QAComponent;
