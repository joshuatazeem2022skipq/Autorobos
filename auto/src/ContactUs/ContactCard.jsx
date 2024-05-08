import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/system";

const ContactCards = () => {
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
  return (
    // <Box sx={{ backgroundColor: "#f3f5fa" }}>
    <Box sx={{ backgroundColor: "#f6fcff" }}>
      <Container sx={{ py: 4 }}>
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
                  <Box sx={{ textAlign: "center" }}>
                    {detail.icon}
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
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
  );
};

export default ContactCards;
