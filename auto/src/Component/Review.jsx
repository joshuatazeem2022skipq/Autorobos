import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Chip,
  Button,
  Icon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
// import S1 from "../Images/Shapea/shape_04.svg";
// import S2 from "../Images/Shapea/shape_05.svg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";



const Review = () => {
  const [index, setIndex] = useState(0);
  const customerData = useSelector((store)=>store.CustomerSection.Clients)
  // const { id, name, job, image, review } = customerData[index];
  const { id, name, image, review } = customerData[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % customerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "130vh", md: "150vh", sm: "100vh" },
          overflow: "hidden",
         
          mb: { md: 10, xs: 0, sm: 0 },
          mt: { xs: "19%", md: "-15%", sm: "0%" },
        }}
      >
         <Grid
                          container
                          direction="column"
                          justifyContent="center" // Center vertically
          alignItems="center"
          sx={{mt:5 , ml:4}}
                          spacing={1}
                        >
                          <Grid item>
                          <Chip
                              label="Testimonials"
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
                              What Our Clients Say About Us
                            </Typography>
                          </Grid>
                         
                        </Grid>   
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "#f6fcff",
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 80%)",
            transform: "scaleX(-1)",
            "@media (max-width: 600px)": {
              clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0% 95%)",
              transform: "none",
            },
          }}
        /> */}
        
        <Box
          sx={{
            margin: "0 auto",
            position: "relative",
            zIndex: 3,
          
            mt: { md: 8, xs: 4, sm: 5 },
            ml: { md: 0, xs: 2, sm: 25 },
          }}
        >
          <Card
            sx={{
              textAlign: "center",
              width: { md: "33%", sm: "60%" },
              height: { md: "360px", xs: "450px", sm: "420px" },
              margin: "0 auto",
              border: "1px solid #303030",
              borderRadius: "30px",
              backgroundColor: "#0b0c10",
              boxShadow: 4,
              ml: { md: 60, xs: 10 },
              mb: { md: 10, xs: 10 },
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Customer ${id}`}
              sx={{
                width: "33%",
                height: "150px",
                borderRadius: "50%",
                borderRight: "10px solid #0ba7a2",
                borderTop: "3px solid #0ba7a2",
                margin: "0 auto",
                display: "block",
                mt: { md: 2, xs: 3 },
              }}
            />
            <Icon
              style={{
                position: "absolute",
                top: "10%",
                left: "45%",
                color: "#0ba7a2",
              }}
            >
              <FormatQuoteIcon />
            </Icon>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "inherit", fontWeight: "bold",color: "white" }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  mt: 2,
                  width: "80%",
                  color: "#797279",
                }}
              >
                {review}
              </Typography>
            </CardContent>
          </Card>
          
        </Box>

        <Container
          sx={{
            // position: "absolute",
            zIndex: 2,
            mt: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
      
          <Box
            sx={{
              justifyContent: "center",
              position: "absolute",
              display: "flex",
              flex: "1",
              mt: { md: 0, sm: 3, xs: 4 },
              ml: { md: 67, sm: 45, xs: 17.5 },
            }}
          >
            <Button
              variant="outlined"
              onClick={() =>
                setIndex(
                  (index - 1 + customerData.length) % customerData.length
                )
              }
            >
              <ChevronLeftIcon sx={{ color: "white" }} />
            </Button>
            <Button
              variant="outlined"
              sx={{ ml: 3 }}
              onClick={() => setIndex((index + 1) % customerData.length)}
            >
              <ChevronRightIcon sx={{ color: "white" }} />
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Review;
