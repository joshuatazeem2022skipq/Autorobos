import React from "react";
import { useSelector } from 'react-redux';
import { Box, Typography, Grid, Container, Card, CardContent, Chip } from "@mui/material";
import store from "../Store/store";

const MainPage = () => {
  const data = useSelector((store) => store.DiffSection.Diffs);

  return (
    <Box sx={{ backgroundColor: "#0b0c10", mt: { md: 0, sm: -11, xs: 0 } }}>
      <Box sx={{}}>
        <Chip
          label="About Us"
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "#0ba7a2",
            border: "1px solid #303030",
            padding: 3,
            ml: 8,
            fontWeight: "bold",
            borderRadius: 13,
            letterSpacing: 1.5,
            mt: 9,
            filter: "brightness(150%)",
          }}
        />
      </Box>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box sx={{ marginTop:{xs:5},width: "100%" }}>
              <Grid container spacing={2}>
                {data.map((service, index) => (
                  <Grid
                    item
                    sm={6}
                    xs={12}
                    key={index}
                  >
                    <Card
                      sx={{
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: "cover",
                        height: index === 0 || index === data.length - 1 ? 500 : 300,
                        marginTop: {md : index === 3 ? -25 : 0},
                        border: "2px solid #303030",
                        color: "white",
                        padding: 2,
                        position: "relative",
                        "&:hover": {
                          boxShadow: "0px 0px 10px 0px #0ba7a2",
                        },
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "rgba(0, 0, 0, 0.5)",
                          zIndex: 1,
                        },
                      }}
                    >
                      <CardContent sx={{ zIndex: 2 }}>
                        <Typography variant="h5" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant="body1">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box
              sx={{
                width: "100%",
                paddingLeft: 4,
                paddingTop: { xs: 4, md: 0 }, // Add padding only on small screens
                flexDirection: { xs: 'column' }, // Change direction to column on small screens
                position: "sticky",
                top: 0,
                overflowY: "auto",
                height: "60vh",
                marginTop: { xs: 5, md: 0 }, // Add margin only on small screens
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                align="center"
                color="white"
                sx={{ paddingBottom: 5 }}
              >
                What makes us different
                <Typography variant="subtitle1">
                  Autorobos expert strategies vision Lorem ipsum dolor sit amet
                  consectetur adipisicing <br></br>adipisicing elit. Dolore
                  necessitatibus cum, facilis autem deleniti corporis suscipit iure!
                  Suscipit, assumenda et!
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPage;
