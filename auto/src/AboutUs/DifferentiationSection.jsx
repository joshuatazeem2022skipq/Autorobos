import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  CardMedia,
  Container,
} from "@mui/material";
import A1 from "../Images/Aboutus/P1/01.jpg";
import A2 from "../Images/Aboutus/P1/02.jpg";
import A3 from "../Images/Aboutus/P1/03.jpg";
import A4 from "../Images/Aboutus/P1/04.jpg";
import A5 from "../Images/Aboutus/P1/05.jpg";
import A6 from "../Images/Aboutus/P1/06.jpg";

const servicesData = [
  {
    title: "Comprehensive Automation Solutions",
    description:
      "Our company stands out for its holistic approach to automation, offering end-to-end solutions that cover Automation, IoT, Embedded Systems, and Robotics. Unlike others, we seamlessly integrate these technologies to optimize your processes for unparalleled efficiency.",
    bgImage: A1,
  },
  {
    title: "Strategic Digital Marketing Expertise",
    description:
      "In the vast landscape of digital marketing, we distinguish ourselves with strategic prowess. Our team employs cutting-edge techniques and AI-driven strategies to ensure your brand not only stands out but also excels in the digital realm.",
    bgImage: A2,
  },
  {
    title: "Versatile Development Capabilities",
    description:
      "From Web Development to App Development, we pride ourselves on versatility. Our proficiency spans the entire spectrum, providing you with tailor-made solutions that align perfectly with your business objectives.",
    bgImage: A3,
  },
  {
    title: "Creative Graphics Design",
    description:
      "Creativity is at the heart of our Graphics services. We don't just design; we craft visual stories that resonate with your audience. Our graphics team goes beyond aesthetics, ensuring your brand communicates effectively and leaves a lasting impression.",
    bgImage: A4,
  },
  {
    title: "AI Integration for Intelligent Solutions",
    description:
      "What truly differentiates us is our commitment to harnessing the power of Artificial Intelligence. We seamlessly integrate AI into our services, providing intelligent solutions that adapt and evolve with the dynamic demands of your business.",
    bgImage: A5,
  },
  {
    title: "Proven Track Record",
    description:
      "Numbers speak louder than words. Our company boasts impressive figures in terms of successful projects, satisfied clients, and measurable results. Trust in our track record, as it reflects our dedication to excellence and client satisfaction in the ever-evolving landscape of automation and digital marketing.",
    bgImage: A6,
  },
];

const PaperBlock = ({ title, description, bgImage }) => (
  <Paper
    sx={{
      padding: 2,
    
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      height: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "15px",
      "&:hover": {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 3)",
      },
    }}
  >
    <Typography variant="h5" color="HighlightText">
      {title}
    </Typography>
    <Typography variant="inherit" color="HighlightText">
      {description}
    </Typography>
  </Paper>
);

const MainPage = () => (
  <Box sx={{ backgroundColor: "#f1f4f7", mt: { md: 0, sm: -11, xs: 0 } }}>
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        color="info"
        sx={{ padding: 5 }}
      >
        What makes us different
        <Typography variant="subtitle1" gutterBottom>
          Autorobos expert strategies vision
        </Typography>
      </Typography>
      <Grid container spacing={2}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 8 }}>
            <PaperBlock {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default MainPage;
