import React from "react";
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import store from "../Store/store";




const MainPage = () => {
  const data = useSelector((store)=>store.DiffSection.Diffs)
  return (
    <Box sx={{  backgroundColor: "#0b0c10", mt: { md: 0, sm: -11, xs: 0 } }}>
      <Box sx={{ }}>
    <Typography variant="h3" fontWeight="medium" color="white" sx={{ paddingLeft : "35px", paddingTop: "45px" }}>
      About Us
    </Typography>
  </Box>
     
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "65%" }}>
          <Grid container spacing={2}>
            {data.map((service, index) => (
              <Grid sx={{mt: 5, height:"480px"}} item xs={12} and sm={6} key={index}>
                <Card
                  sx={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: "cover",
                    height: index === 0 || index === data.length - 1 ? 500 : 300,
                    marginTop: index ===3? -25:0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                   border : "2px solid #303030",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 5,
                    color: "white",
                    padding: 2,
                    position: "relative",
                    "&:hover" :{
                      boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.7)",
                    },
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "50%",
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
        <Box sx={{position:"sticky", top: 0 ,overflowY: "auto", height: "60vh",  marginTop: 5,width: "35%", paddingLeft: 4 }}>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            color="white"
            sx={{ paddingBottom: 5 }}
          >
            What makes us different
            <Typography variant="subtitle1">
              Autorobos expert strategies vision 
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br></br>adipisicing elit. Dolore necessitatibus cum, f
              acilis autem deleniti corporis suscipit iure! Suscipit, assumenda et!
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MainPage;
