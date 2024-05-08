import React from "react";
import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import Logo from "../Images/B.png";
import { useNavigate } from "react-router-dom";

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
        bgcolor: "#1a1a1a",
        color: "white",
        py: 4,
        display: "flex",

        justifyContent: "center",
        // border: "1px solid white",
      }}
    >
      <Container maxWidth="lg">
        <Divider
          sx={{ width: "100%", borderBottom: "1px solid GrayText", mb: 3 }}
        />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" gutterBottom align="center">
                Get connected with us on social networks:
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2, mb: 2 }}>
                <Link href="#" color="inherit">
                  <Facebook />
                </Link>
                {/* <Link href="#" color="inherit">
                  <Twitter />
                </Link> */}
                {/* <Link href="#" color="inherit">
                  <Google />
                </Link> */}
                <Link href="#" color="inherit">
                  <LinkedIn />
                </Link>
                <Link href="#" color="inherit">
                  <Instagram />
                </Link>
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                mb: 5,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  flexShrink: 0,
                  width: { xs: "100%", sm: "auto" }, 
                  mr: { xs: 0, sm: 2 }, 
                  mb: { xs: 2, sm: 0 },
                }}
              >
                Sign up for our newsletter
              </Typography>
              <TextField
                variant="outlined"
                size="small"
                label="Email address"
                fullWidth
                sx={{
                  flexGrow: 1,
                  bgcolor: "white",
                  mb: { xs: 2, sm: 0 },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  flexShrink: 0,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid> */}
        </Grid>

        <Divider
          sx={{ width: "100%", borderBottom: "1px solid GrayText", mb: 3 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box pr={2}>
              <img src={Logo} alt="Company Logo" style={{ width: "30%" }} />
              <Typography variant="body2" paragraph>
                Autorobos delivers automation and digital marketing services to
                enhance your business and online reach. We can handle any
                project from chatbots to web scrapers to social media campaigns.
                Contact us today and let us show you the benefits of automation
                and digital marketing.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ px: { xs: 1, md: 8 } }}>
              <Typography variant="h6" gutterBottom>
                Products
              </Typography>
              <Typography
                variant="body2"
                paragraph
                onClick={handleHome}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
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
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
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
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
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
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box px={1}>
              <Typography variant="h6" gutterBottom>
                Useful Links
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
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
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Automatics
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Internet of Things
              </Typography>
              <Typography
                component="div"
                display="block"
                onClick={handleservices}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
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
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
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
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5497ff",
                    transition: "color 0.3s ease",
                  },
                }}
              >
                Digital Marketing
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box pl={1}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography component="div" display="block">
                Office 131 1st Floor, Center Point Plaza Kohinoor, Faisalabad.
              </Typography>
              <Typography component="div" display="block">
                (+92) 321 786 4079
              </Typography>
              <Typography component="div" display="block">
                sales@autorobos.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Typography variant="body2" align="center">
            © 2024 Copyright: autorobos.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
