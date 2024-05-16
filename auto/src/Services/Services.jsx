import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Container,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  CardActions,
  Accordion,
  Slide,
  Avatar,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import { content, initialServicesData } from "./servicesData";
import b1 from "../Images/Services/exp/Ai/ils_20.png";
import BgImage1 from "../Images/bg7.jpg"
import BgImage from "../Images/bg4.jpg"
import BgImage2 from "../Images/bg8.jpg"
import { useSelector } from "react-redux";
// import b2 from "../Images/Services/exp/Services Content/A.jpg";
import b3 from "../Images/Services/exp/Ai/shape_48.png";
import { styled } from "@mui/system";

const mainDiv = {
  position: "relative",
  backgroundColor: "#0b0c10",
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
  borderRadius: "20px",
  backgroundColor: "#0b0c10"
};
const box1 = {
  display: "flex",
  justifyContent: "flex-start",
};
const button = {
  backgroundColor: "#0ba7a2",
  border: "1px solid #303030",
  borderRadius: 13,
  mt: 3,
  color: "white",
  "&:hover": {
    backgroundColor: "white!important",
    color: "#0ba7a2",
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
  const intialServicesData = useSelector((store)=>store.ServiceSection.initialServicesData)
  const [servicesData, setServicesData] = useState(intialServicesData);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDetailViewActive, setIsDetailViewActive] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [expanded, setExpanded] = useState(`panel0`);
  const [isPanelExpanding, setIsPanelExpanding] = useState(false);
  const detailViewRef = useRef(null);

  const data = useSelector((store)=>store.CardSection.Cards)
  const content = useSelector((store)=>store.ServiceContentSection.content)
 
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
    <Box sx={{backgroundColor:"#0b0c10"}}>
<Box sx={{
         background: ` url(${BgImage1})`,
        height: "60vh",
        mt:5,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Align text to the left
        textAlign: "left", // Align children text to the left
      }}>
        <Typography color="white" variant= "h2" sx={{fontWeight: "bold"}} >
          Services
        </Typography>
      </Box>
  
    
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
    
            <Box
    sx={{
      height: { md: 350, xs: 2360, sm: 1100 },
      minWidth: "100%",
      background: ` url(${BgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed", 
      position: "relative",
      zIndex: 1,
      mt: { md: 15, xs: 0 },
    }}
  >
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8} md={7} sx={{mt:13}} alignItems="center" textAlign="center">
        <Typography variant="h3" fontWeight="bold" sx={{ color: "white", textAlign: "center"}}>
          Wanna See Our Latest Works?
        </Typography>
        <Typography variant="body1" sx={{ color: "grey",mt:3 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus
          possimus vitae dignissimos esse voluptatem commodi adipisci!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#0ba7a2",
            border: "1px solid #303030",
            borderRadius: 13,
            padding:2,
            color: "white", 
            mt: 2,
            "&:hover": {
              backgroundColor: "white!important",
              color: "#0ba7a2",
            },
          }}
        >
          All Projects
        </Button>
      </Grid>
    </Grid>
  </Box>

  <div style={mainDiv}>
        <Grid container spacing={0} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6} sx={main}>
            <Container sx={{marginTop:"65px",}}>
              {intialServicesData.map((service, index) => (
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
        </div>   */}
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
                    src={content[activeServiceIndex].bgImage2}
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


<Box sx={{ backgroundColor: "#0b0c10", mb:1 }}>
      <Container
        sx={{
          backgroundImage: `url(${BgImage2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "1px solid #303030",
          backgroundAttachment: "fixed", // Make background image fixed
          height: "60vh",
          mt:10,
          "@media (max-width: 600px)": {
            height: "79vh",
            ml: 1,
           
          },
          minWidth: "90%",
          borderRadius: 7,
          py: 4,
        }}
      >
        <Grid container sx={{ mt: 0 }}>
        <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8} md={12} sx={{mt:13}} alignItems="center" textAlign="center">
        <Typography variant="h3" fontWeight="bold" sx={{ color: "white", textAlign: "center"}}>
          Lets Create Something Great Together?
        </Typography>
        <Typography variant="body1" sx={{ color: "grey",mt:3 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus
          possimus vitae dignissimos esse voluptatem commodi adipisci!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#0ba7a2",
            border: "1px solid #303030",
            borderRadius: 13,
            padding:2,
            color: "white", 
            mt: 2,
            "&:hover": {
              backgroundColor: "white!important",
              color: "#0ba7a2",
            },
          }}
        >
          Make Inquiry
        </Button>
      </Grid>
    </Grid>
          
        </Grid>
      </Container>
    </Box>
    </Box>
  );
};

export default ServiceComponent;
