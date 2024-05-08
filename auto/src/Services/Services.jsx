import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Container,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { content, initialServicesData } from "./servicesData";
import b1 from "../Images/Services/exp/Ai/ils_20.png";
// import b2 from "../Images/Services/exp/Services Content/A.jpg";
import b3 from "../Images/Services/exp/Ai/shape_48.png";
import { styled } from "@mui/system";

const mainDiv = {
  position: "relative",
  backgroundColor: "#1a1a1a",
  minHeight: "100vh",
  width: "100%",
  marginBottom: "10px",
};
const main = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  mt: { md: 0, xs: 4 },
};
const Acc1 = {
  width: "100%",
  marginBottom: "10px",
  p: "10px",
  border: "1px solid #81b0ed",
  borderRadius: "10px",
  backgroundColor: "#1a1a1a",
};
const box1 = {
  display: "flex",
  justifyContent: "flex-start",
};
const button = {
  color: "whitesmoke",
  border: "1px solid gray",
  mt: 2,
  "&:hover": {
    color: "white",
    backgroundColor: "#81b0ed",
    border: "1px solid white",
  },
};
const main2 = {
  position: "relative",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const box2 = {
  height: "80%",
  maxWidth: "80%",
  maxHeight: "80%",
  position: "relative",
};
// const div1 = {
//   position: "absolute",
//   bottom: 14,
//   left: 0,
//   right: 0,
//   display: "flex",
//   justifyContent: "center",
// };
// const div2 = {
//   position: "relative",
//   backgroundColor: "#f1f4f7",
//   height: "150.2vh",
//   overflow: "hidden",
// };
// const containerStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   textAlign: "center",
// };

const StyledCard = styled(Card)({
  overflow: "hidden",
  maxWidth: "100%",
  height: "auto",
  boxShadow: "30px",
  borderRadius: "20px",
});

const StyledCardMedia = styled(CardMedia)({
  maxWidth: "100%",
  height: "auto",
  overflow: "hidden",
  position: "relative",
  transition: "transform 0.3s ease",
  boxShadow: "30px",
  borderRadius: "20px",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "30px",
    borderRadius: "20px",
  },
});

const ServiceComponent = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [servicesData, setServicesData] = useState(initialServicesData);
  const [isDetailViewActive, setIsDetailViewActive] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [expanded, setExpanded] = useState(`panel0`);
  const [isPanelExpanding, setIsPanelExpanding] = useState(false);
  const detailViewRef = useRef(null);

  console.log(setServicesData);
  // const mergedArray = serviceName.map((service, index) => ({
  //   ...content1[index],
  //   ...service,
  // }));

  useEffect(() => {
    if (!isDetailViewActive) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prevIndex) =>
          prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isDetailViewActive, servicesData.length]);

  const handleButtonClick = (index) => {
    setActiveServiceIndex(index);
    setIsDetailViewActive(true);
    setExpanded(`panel${index}`);

    setTimeout(() => {
      if (detailViewRef.current) {
        detailViewRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };
  // const handleCloseButtonClick = () => {
  //   setIsDetailViewActive(false);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const handleCloseButtonClick = () => {
    setIsDetailViewActive(false);

    const scrollToTop = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 50);
        setTimeout(scrollToTop, 10);
      }
    };

    scrollToTop();
  };

  const handleChange = (panel) => (event, newExpanded) => {
    if (newExpanded && !isPanelExpanding) {
      setIsPanelExpanding(true);
      setExpanded(panel);
      setTimeout(() => {
        setIsPanelExpanding(false);
      }, 300);
    }
  };

  return (
    <>
      <div style={mainDiv}>
        <Grid container spacing={0} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6} sx={main}>
            <Container>
              {initialServicesData.map((service, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={Acc1}
                  defaultExpanded
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke" }} />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", color: "whitesmoke" }}
                    >
                      {service.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography align="left" sx={{ color: "whitesmoke" }}>
                      {service.content}
                    </Typography>
                    <Box sx={box1}>
                      <Button
                        onClick={() => handleButtonClick(index)}
                        variant="outlined"
                        sx={button}
                      >
                        View More
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Container>
          </Grid>
          <Grid item xs={12} sm={8} md={6} sx={main2}>
            <Box sx={box2}>
              <img
                src={servicesData[currentServiceIndex].image}
                alt={servicesData[currentServiceIndex].title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* <div style={div1}>
          <Button
            style={{
              marginRight: 10,
              color: "black",
            }}
            onClick={() =>
              setCurrentServiceIndex((prevIndex) =>
                prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
              )
            }
          >
            <ArrowCircleLeftIcon />
          </Button>
          <Button
            style={{
              color: "black",
            }}
            onClick={() =>
              setCurrentServiceIndex((prevIndex) =>
                prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            <ArrowCircleRightIcon />
          </Button>
        </div> */}
      </div>
      {isDetailViewActive && (
        <div ref={detailViewRef}>
          <div style={{ backgroundColor: "#fcfdff" }}>
            <Grid
              container
              style={{ backgroundColor: "#f6fcff", minHeight: "300px" }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h3" align="center" fontWeight={"bold"}>
                  {content[activeServiceIndex].title
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={index}
                        style={{
                          color: index > 0 ? "purple" : "inherit",
                          textDecoration: index > 0 ? "underline" : "none",
                        }}
                      >
                        {word}{" "}
                      </span>
                    ))}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <img
                  src={b1}
                  alt="Service"
                  style={{ width: "70%", height: "auto", objectFit: "cover" }}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "450px",
                  backgroundImage: `url(${b3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "flex-end",
                }}
              >
                <Card
                  sx={{
                    width: "67%",
                    height: "50vh",
                    justifyContent: "center",
                    borderRadius: "10px",
                    filter: "dropShadow (10px 7px 10px black)",
                    border: "3px solid #f7fcff",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ mt: 1, mb: 3, fontWeight: "bold" }}
                    >
                      Technologies
                    </Typography>
                    {[
                      "Python (TensorFlow, PyTorch, scikit-learn)",
                      "Apache Spark",
                      "AWS SageMaker",
                      "Microsoft Azure Machine Learning",
                      "Custom Firmware Development",
                      "React JS",
                      "Vanilla javascript",
                    ].map((tech, index) => (
                      <Typography
                        variant="body1"
                        key={index}
                        sx={{
                          marginBottom: 2,
                          color: "black",
                          fontWeight: 300,
                        }}
                      >
                        - {tech}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} sx={{ mt: 10, ml: { md: 0, xs: 2 } }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ width: { md: "80%", xs: "90%" }, fontWeight: "bold" }}
                >
                  Delivering the insights you need to help business growth
                </Typography>
                <div>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ width: { md: "80%", xs: "90%" }, mb: 5 }}
                  >
                    {content[activeServiceIndex].title1}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ width: { md: "80%", xs: "90%" }, mb: 5 }}
                  >
                    {content[activeServiceIndex].title2}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "grey",
                      width: { md: "80%", xs: "90%" },
                      mb: 5,
                    }}
                  >
                    {content[activeServiceIndex].points.map((point, idx) => (
                      <React.Fragment key={idx}>
                        {point}
                        {idx !==
                          content[activeServiceIndex].points.length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </Typography>
                </div>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              ></Grid>
              <Grid
                item
                xs={12}
                md={6.5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <StyledCard>
                  <StyledCardMedia
                    component="img"
                    src={content[activeServiceIndex].bgImage}
                    alt="Specific Service"
                  />
                </StyledCard>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 7 }}>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={8}>
                <Card
                  sx={{
                    width: "80%",
                    borderRadius: "12px",
                    filter: "dropShadow(10px 7px 10px black)",
                    border: "3px solid #f7fcff",
                    mb: 5,
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    sx={{ padding: "20px" }}
                  >
                    <Grid item xs={12} md={8}>
                      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
                        Our Goals
                      </Typography>

                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{ ml: 3 }}
                      >
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" align="left">
                            • Enable Autonomous Devices
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" align="left">
                            • Optimize Resource Utilization
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" align="left">
                            • Facilitate Edge Computing
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" align="left">
                            • Drive Innovation
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" align="left">
                            • Empower Our Clients
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Button variant="outlined" onClick={handleCloseButtonClick}>
                Close
              </Button>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceComponent;
