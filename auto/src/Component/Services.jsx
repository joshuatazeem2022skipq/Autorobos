import React from "react";
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
import EastIcon from "@mui/icons-material/East";
import { ReactComponent as I1 } from "../Images/Services/icons/icon_08.svg";
import { ReactComponent as I2 } from "../Images/Services/icons/icon_09.svg";
import { ReactComponent as I3 } from "../Images/Services/icons/icon_10.svg";
import { ReactComponent as I4 } from "../Images/Services/icons/icon_11.svg";
import { ReactComponent as I5 } from "../Images/Services/icons/icon_12.svg";
import h1 from "../Images/Services/home/01.jpg";
import h2 from "../Images/Services/home/04.jpg";
import h3 from "../Images/Services/home/08.jpg";
import h4 from "../Images/Services/home/09.jpg";
import h5 from "../Images/Services/home/10.jpg";
import S from "../Images/Services/icons/bg_04.svg";
import S1 from "../Images/Shapea/shape_04.svg";
import S2 from "../Images/Shapea/shape_05.svg";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    icon: <Typography variant="h6">Welcome Services</Typography>,
    actions: [],
  },
  {
    icon: <I1 />,
    title: "Web App development",
    description:
      "At AutoROBS, we specialize in the cutting-edge world of Automation technologies and their applications.",
    actions: [<EastIcon />],
    bgImage: h1,
  },
  {
    icon: <I2 />,
    title: "Mobile App Development",
    description:
      "At AutoROBS comes with a lot of expertise with Robotics developers to execute any robotics project from start to finish.",
    actions: [<EastIcon />],
    bgImage: h2,
  },
  {
    icon: <I3 />,
    title: "Internet of Things (IoT)",
    description:
      "Access tools for deep learning, cloud computing, and AI capabilities.",
    actions: [<EastIcon />],
    bgImage: h3,
  },
  {
    icon: <I4 />,
    title: "AI (Machine Learning)",
    description:
      "we specialize in the cutting-edge world of IoT technologies and their applications.",
    actions: [<EastIcon />],
    bgImage: h4,
  },
  {
    icon: <I5 />,
    title: "Embedded System",
    description:
      "At AutoROBS comes with a lot of expertise with embedded developers to execute any embedded project from start to finish.",
    actions: [<EastIcon />],
    bgImage: h5,
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleClickServices = () => {
    navigate("/services");
  };
  return (
    <>
      <Box
        sx={{
          background: "#f1f4f7",
          position: "relative",
          // mb: 10,
        }}
      >
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
              {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "340px",
                      width: "95%",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      border: "none",
                      mt: 3,
                      ml: { xs: 1 },
                      ...(index === 0 && {
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "none",
                        width: "100%",
                        transform: "rotateX(0) rotateY(0)",
                        transformStyle: "preserve-3d",
                        transitionDuration: "0.1s",
                        transitionTimingFunction: "ease",
                        "&:hover": {
                          transform:
                            "perspective(700px) rotate(-4.51842deg) rotate(2.53071deg) rotateX(10deg) rotateY(10deg) translate(3px, 3px) scale(1)",
                        },
                        "&:active": {
                          transform:
                            "rotateX(10deg) rotateY(10deg) translate(3px, 3px)",
                        },
                      }),
                      backgroundImage: `url(${card.bgImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      transform: "scale(1)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
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
                      {index === 0 ? (
                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Grid item>
                            <Chip
                              label="Services"
                              variant="outlined"
                              sx={{
                                backgroundColor: "#1a1a1a",
                                color: "#5497ff",
                                fontWeight: "bold",
                                letterSpacing: 1.5,
                                mt: 2,
                                filter: "brightness(150%)",
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Typography variant="h2" color={"#1a1a1a"}>
                              Our expertise field.
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1" color={"#1a1a1a"}>
                              For more services:
                              <Button
                                onClick={handleClickServices}
                                sx={{
                                  color: "#3384ff",
                                  "&:hover": { color: "#FF7A41" },
                                }}
                              >
                                Click Here <KeyboardDoubleArrowRightIcon />
                              </Button>
                            </Typography>
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <Avatar
                              sx={{
                                background: "white",
                                mt: 1,
                                height: 100,
                                width: 100,
                                filter: "brightness(150%)",
                              }}
                            >
                              {card.icon}
                            </Avatar>
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
                              color={"white"}
                            >
                              {card.description}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <CardActions sx={{ mt: 2 }}>
                              {card.actions.map((action, index) => (
                                <IconButton
                                  key={index}
                                  sx={{
                                    color: "white",
                                    "&:hover": { color: "#0066ff" },
                                  }}
                                >
                                  {action}
                                </IconButton>
                              ))}
                            </CardActions>
                          </Grid>
                        </Grid>
                      )}
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box
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
        />
      </Box>
    </>
  );
};

export default Services;
