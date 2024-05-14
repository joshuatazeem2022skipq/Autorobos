import React, { useState } from "react";
import {
  Card,
  Grid,
  Box,
  Container,
  Chip,
  Typography,
  Avatar,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";



import S from "../Images/Services/icons/bg_04.svg";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../Store/store";



const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleClickServices = () => {
    navigate("/services");
  };

const data = useSelector((store)=>store.CardSection.Cards)

  return (
    <>
      <Box
        sx={{
          background: "#14151b",
          position: "relative",
          height: "100%"
          // mb: 10,
        }}
      >
        <Grid
                          container
                          direction="column"
                          justifyContent="center" // Center vertically
          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                          <Chip
                              label="Services"
                              variant="outlined"
                              sx={{
                                backgroundColor: "transpparent",
                                color: "#0ba7a2",
                                border: "1px solid #303030",
                                padding : 3,
                                fontWeight: "bold",
borderRadius: 13,
                                letterSpacing: 1.5,
                                mt: 9,
                                filter: "brightness(150%)",
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="h2" fontWeight="bold" color={"white"}>
                              Our expertise field.
                            </Typography>
                          </Grid>
                         
                        </Grid>
        <Box
          sx={{
            height: { md: 700, xs: 2360, sm: 1100 },
            width: "100%",
            backgroundImage: `url(${S})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
            zIndex: 1,
            mt: { md: 0, xs: 0 },
          }}
        >
          <Container>
            <Grid container spacing={2} sx={{ mt: { md: 0, xs: 0 } }}>
              {data.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card  
  onMouseEnter={() => setHoveredCard(index)}
  onMouseLeave={() => setHoveredCard(null)}
                    variant="outlined"
                    sx={{
                      height: "300px",
                      width: "97%",
                      
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      border: "2px solid #303030",
                      mt: 3,
                      ml: { xs: 1 },
        backgroundColor:'#0b0c10',
                      transform: "scale(1)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        // transform: "scale(1.05)",
                        transition: "opacity 0.3s ease",
                        border: "1px solid #0ba7a2"
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 2,
                      }}
                    >
                      
                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          spacing={1}
                        >
                        
                           <Grid item>
                           {hoveredCard !== index ? (
                            <Avatar
                              sx={{
                                background: "#0ba7a2",
                                mt: 1,
                                color: "#0ba7a2",
                                height: 70,
                                width: 70,
                                filter: "brightness(150%)",
                              }}
                            >
                              {card.icon}
                            </Avatar>
                          ) : null}
                         </Grid>
                        
                          
                          <Grid item>
                            <Typography
                              variant="h5"
                              sx={{ mt: 1, color: "white" }}
                            >
                              {card.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body1"
                              align="center"
                              color={"grey"}
                            >
                              {card.description}
                            </Typography>
                          </Grid>
                          {/* {hover? */}
                          <Grid item>
                          {hoveredCard === index ? (
                          <CardActions sx={{ mt: 2 }}>
                            {card.actions.map((action, index) => (
                              <IconButton
                                key={index}
                                sx={{
                              
                                  color: "#0ba7a2",
                                  "&:hover": { color: "#0066ff" },
                                }}
                              >
                               See Details {action}
                              </IconButton>
                            ))}
                          </CardActions>
                           ) : null}
                        </Grid>
                        {/* // :null
                        // } */}
                          
                        </Grid>
                  
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* <Box
          sx={{
            height: "180px",
            width: "35%",
            bottom: -88,
            position: "absolute",
            left: 0,
            backgroundImage: `url(${S1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 0,
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        />
        <Box
          sx={{
            height: "280px",
            width: "35%",
            position: "absolute",
            bottom: -110,
            right: 0,
            backgroundImage: `url(${S2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            zIndex: 0,
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        /> */}
      </Box>
    </>
  );
};

export default Services;
