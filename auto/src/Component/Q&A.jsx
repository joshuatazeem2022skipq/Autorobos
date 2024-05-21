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
        <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8} md={12} sx={{mt:3}} alignItems="center" textAlign="center">
      <Grid item>
                          <Chip
                              label="Questions & Answers"
                              variant="outlined"
                              sx={{
                                backgroundColor: "transpparent",
                                color: "#0ba7a2",
                                border: "1px solid #303030",
                                padding : 3,
                                fontWeight: "bold",
borderRadius: 13,
                                letterSpacing: 1.5,
                                mt: 5,
                                filter: "brightness(150%)",
                              }}
                            />
                          </Grid>
        <Typography variant="h3" fontWeight="bold" sx={{ color: "white", textAlign: "center"}}>
          Any Questions?
          <br></br>Find Here!
        </Typography>
        <Typography variant="body1" sx={{ color: "grey",mt:3 }}>
        Don’t find your answer here? Just send us a message for any query.
        </Typography>
        <Button
          sx={{
            backgroundColor: "#0ba7a2",
            border: "1px solid #303030",
            borderRadius: 13,
            padding:2,
            color: "white", 
            mt: 2,
            "&:hover": {
              backgroundColor: "white!important",
              color: "#0ba7a2",
            },
          }}
        >
            Contact Us
        </Button>
      </Grid>
    </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default QAComponent;
