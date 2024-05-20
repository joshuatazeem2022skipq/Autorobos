import React, { useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/system";
import bgImage from "../Images/Contact/22.jpg";
import image from "../Images/Contact/Contact Us.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { CardContent } from "@mui/material";
import { Card } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

const ContactPage = () => {
  const contactDetails = [
    { icon: <PhoneIcon />, title: "PHONE", content: "(+92) 321 786 4079" },
    { icon: <EmailIcon />, title: "FOR SALES", content: "sales@autorobos.com" },
    { icon: <EmailIcon />, title: "FOR INFO", content: "info@autorobos.com" },
    {
      icon: <EmailIcon />,
      title: "FOR JOBS",
      content: "careers@autorobos.com",
    },
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
      ref={parallaxRef}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "110vh",
        mt: -11,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", py: { xs: 9, md: 10 } }}>
              <Typography
                variant="h4"
                align="left"
                sx={{ color: "#fff", mb: 4 }}
              >
                Get in touch with us for any inquiries or collaborations.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  mb: 2,
                  border: "2px solid #303030",
                  width: "210px",
                  borderRadius: "22px",
                  boxShadow: "0 12px 14px rgba(0, 0, 0, 0.6)",
                  p: "3px",
                  "&:hover": {
                    backgroundColor: "#0ba7a2",
                  },
                }}
              >
                Contact Us
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <InstagramIcon sx={{ color: "#0ba7a2", fontSize: 32, mx: 1 }} />
                <LinkedInIcon sx={{ color: "#0ba7a2", fontSize: 32, mx: 2 }} />
                <FacebookIcon sx={{ color: "#0ba7a2", fontSize: 32, mx: 2 }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                py: 2,
                mt: { xs: -7, md: 5 },
                ml: { md: 9, xs: 0 },
              }}
            >
              <img
                src={image}
                alt="Contact Us"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ mt: { xs: 2, sm: 4, md: 6 }, m: "auto", mb: 2 }}>
        <Container>
          <Grid container spacing={4}>
            {contactDetails.map((detail, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ textAlign: "center", color: "#0ba7a2" }}>
                      {detail.icon}
                      <Typography
                        variant="h6"
                        sx={{ mt: { xs: 2, md: 3 }, mb: 1 }}
                      >
                        {detail.title}
                      </Typography>
                      <Typography variant="body2">{detail.content}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
