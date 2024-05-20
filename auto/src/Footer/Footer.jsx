import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import Logo from "../Images/B.png";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { useNavigate } from "react-router-dom";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const handleservices = () => {
    navigate("/services");
    window.scrollTo(0, 0);
  };
  const handleProjects = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };
  const handleAboutUs = () => {
    navigate("/company/aboutus");
    window.scrollTo(0, 0);
  };
  const handleContactUs = () => {
    navigate("/contactus");
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        mt: 18,
        backgroundColor: "#0b0c10",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} lg={3}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <img src={Logo} alt="Company Logo" style={{ width: "40%" }} />
              <Typography fontWeight="medium" variant="body1" paragraph color="white">
                More than a Software House
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Box>
              <Typography fontWeight="bold" color="white" variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography fontWeight="bold" color="whitesmoke" component="div" display="block">
                <LocationOnOutlinedIcon sx={{ color: "#0ba7a2" }} /> Office 131 1st Floor, Center Point Plaza Kohinoor, Faisalabad.
              </Typography>
              <Typography fontWeight="bold" color="whitesmoke" component="div" display="block">
                <LocalPhoneOutlinedIcon sx={{ color: "#0ba7a2" }} /> (+92) 321 786 4079
              </Typography>
              <Typography fontWeight="bold" color="whitesmoke" component="div" display="block">
                <MailOutlineOutlinedIcon sx={{ color: "#0ba7a2" }} /> sales@autorobos.com
              </Typography>
              <Typography fontWeight="bold" color="whitesmoke" component="div" display="block">
                <CalendarMonthOutlinedIcon sx={{ color: "#0ba7a2" }} /> Monday to Friday
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Box>
              <Typography fontWeight="bold" color="white" variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Typography
                variant="body2"
                paragraph
                onClick={handleHome}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "whitesmoke",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Home
              </Typography>
              <Typography
                variant="body2"
                paragraph
                onClick={handleAboutUs}
                sx={{
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body2"
                paragraph
                onClick={handleProjects}
                sx={{
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Projects
              </Typography>
              <Typography
                variant="body2"
                paragraph
                onClick={handleContactUs}
                sx={{
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Box>
              <Typography fontWeight="bold" color="white" variant="h6" gutterBottom>
                Our Services
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  m: 1,
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Robotics
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  m: 1,
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Embedded Systems
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  m: 1,
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Web Development
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  m: 1,
                  color: "whitesmoke",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#0ba7a2",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Digital Marketing
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ width: "100%", borderBottom: "1px solid GrayText", mb: 3, mt: 6 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
          <Typography variant="body2" align="start">
            Privacy Policy
          </Typography>
          <Typography variant="body2" align="start">
            Terms of use
          </Typography>
          <Typography variant="body2" align="start">
            © 2024 Copyright: autorobos.com
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="body1" gutterBottom align="start">
              Get connected with us on social networks:
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="#" color="#0ba7a2">
                <Facebook />
              </Link>
              <Link href="#" color="#0ba7a2">
                <LinkedIn />
              </Link>
              <Link href="#" color="#0ba7a2">
                <Instagram />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
