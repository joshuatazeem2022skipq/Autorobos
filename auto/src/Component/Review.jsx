import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Button,
  Icon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import R1 from "../Images/Analysis/person-1_rfzshl.jpg";
import R2 from "../Images/Analysis/person-2_np9x5l.jpg";
import R3 from "../Images/Analysis/person-3_ipa0mj.jpg";
import R4 from "../Images/Analysis/pexels-ketut-subiyanto-4350097.jpg";
import R5 from "../Images/Analysis/peters.jpg";
// import S1 from "../Images/Shapea/shape_04.svg";
// import S2 from "../Images/Shapea/shape_05.svg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const customerData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "AutoROBS Automation provided exceptional service for our factory automation project. Their attention to detail, expertise in the latest technologies, and commitment to delivering on time exceeded our expectations. Highly recommended!",
    image: R1,
  },
  {
    id: 2,
    name: "Alex Albert",
    review:
      "AutoROBS Robotics is a game-changer in the world of robotics. Their innovative solutions and collaborative approach made our robotics integration seamless. Their team is not just skilled but also passionate about pushing the boundaries of what's possible in automation.",
    image: R2,
  },
  {
    id: 3,
    name: "Rachel David",
    review:
      "AutoROBS AI Solutions has transformed our business with their cutting-edge AI solutions. The predictive analytics and machine learning algorithms they implemented significantly improved our decision-making process. Working with Isaac AI Solutions was a strategic investment in our company's future.",
    image: R3,
  },
  {
    id: 4,
    name: "Isaac Das",
    review:
      "Embedded Tech is a go-to partner for embedded systems development. Their deep understanding of hardware and software integration, coupled with their dedication to quality, made our project a success. Professionalism at its best!",
    image: R4,
  },
  {
    id: 5,
    name: "Emily Peter",
    review:
      "IoT Innovations has been instrumental in our IoT initiatives. Their comprehensive approach, from sensor integration to cloud connectivity, showcased their expertise in the IoT landscape. Working with Oliver IoT Innovations has been a collaborative journey towards a connected and smarter future.",
    image: R5,
  },
];

const Review = () => {
  const [index, setIndex] = useState(0);
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
          minHeight: "100vh",
          overflow: "hidden",
          mb: { md: 10, xs: 0, sm: 0 },
          mt: { xs: "19%", md: "-15%", sm: "0%" },
        }}
      >
        <Box
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
        />
        <Container
          sx={{
            position: "absolute",
            zIndex: 2,
            mt: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            align="left"
            sx={{
              fontWeight: 230,
              width: { md: "50%", sm: "100%" },
              color: "white",
              ml: { md: 30, xs: 10 },
              mt: { xs: 10 },
            }}
          >
            Client’s success Stories.
          </Typography>
          <Box
            sx={{
              justifyContent: "flex-end",
              position: "absolute",
              display: "flex",
              flex: "1",
              mt: { md: 0, sm: 30, xs: 40 },
              ml: { md: 130, sm: 45, xs: 17.5 },
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
        <Box
          sx={{
            margin: "0 auto",
            position: "relative",
            zIndex: 3,
            mt: { md: 40, xs: 54, sm: 45 },
            ml: { md: 0, xs: 2, sm: 25 },
          }}
        >
          <Card
            sx={{
              textAlign: "center",
              width: { md: "30%", sm: "60%" },
              height: { md: "380px", xs: "450px", sm: "420px" },
              margin: "0 auto",
              borderRadius: "30px",
              boxShadow: 4,
              ml: { md: 70, xs: 10 },
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
                borderRight: "10px solid #49a6e9",
                borderTop: "3px solid #49a6e9",
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
                color: "#49a6e9",
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
                sx={{ fontFamily: "inherit", fontWeight: "bold" }}
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

        {/* <Box
          sx={{
            height: "200px",
            width: "30%",
            bottom: -10,
            position: "absolute",
            left: 50,
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
            height: "200px",
            width: "30%",
            position: "absolute",
            bottom: -10,
            right: -60,
            backgroundImage: `url(${S2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            zIndex: 1,
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        /> */}
      </Box>
    </>
  );
};

export default Review;
