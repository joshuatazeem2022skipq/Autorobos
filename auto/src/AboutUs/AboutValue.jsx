import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import C1 from "../Images/Aboutus/37.svg";
import C2 from "../Images/Aboutus/38.svg";
import C3 from "../Images/Aboutus/39.svg";
import C4 from "../Images/Aboutus/40.svg";

const valuesData = [
  {
    img: C1,
    title: "Expertise",
    desc: "Our certified medical billing specialists and technical analysts are highly trained and adept in all areas of medical claims billing. Medcare MSO provides comprehensive, continuous training so our team is always up to date on current regulations and technologies.",
  },
  {
    img: C2,
    title: "Diversity",
    desc: "Whether it’s the Medcare team or our specialized range of services, we believe diversity allows us to meet the unique needs of each customer. No two healthcare organizations are exactly alike, so we’re committed to providing the most beneficial services to each client, based on their individual needs.",
  },
  {
    img: C3,
    title: "Technology",
    desc: "At Medcare MSO, we know that innovation and technology are the keys to keeping up with the constantly changing billing and coding requirements. We invest in the latest medical billing technologies and employ healthcare IT industry experts to provide unparalleled medical billing services and practice management.",
  },
  {
    img: C4,
    title: "Curiosity",
    desc: "The management at Medcare encourages creativity and curiosity in our team. Nothing in history was ever improved upon by accepting things as they were, so we are committed to innovation and ingenuity.",
  },
];

const AboutValue = () => {
  return (
    <Container sx={{ mb: 4, mt: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "white" }}>
        OUR COMPANY VALUES
      </Typography>
      <Grid container spacing={4}>
        {valuesData.map((value, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Card
              sx={{
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
                },
                height: "100%",
                bgcolor: "#121e1c",
                border: "1px solid #1170a1",
                color: "white",
              }}
            >
              <Box sx={{ textAlign: "left", pt: 2, pl: 2 }}>
                <img
                  src={value.img}
                  alt={value.title}
                  style={{
                    width: "20%",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ mb: 1, fontWeight: "bold", mt: 1 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body2" align="left">
                    {value.desc}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutValue;
