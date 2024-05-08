import React from "react";
import { Box, CardMedia } from "@mui/material";
// import B7 from "../../Images/Banner/white and blue animation.mp4";
import B1 from "../../Images/Banner/ils_04.svg";
import B2 from "../../Images/Banner/ils_04_1.svg";
import B3 from "../../Images/Banner/ils_04_2.svg";
import B4 from "../../Images/Banner/ils_04_4.svg";
import B5 from "../../Images/Banner/ils_04_5.svg";
import B6 from "../../Images/Banner/ils_04_6.svg";

const BannerImage = () => {
  return (
    <Box>
      {/* <video
        width="100%"
        height="790"
        autoPlay
        loop
        muted
        playsInline
        style={{ marginTop: 20 }}
      >
        <source src={B7} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <CardMedia
          component="img"
          alt="Background Image"
          image={B1}
          sx={{
            height: { md: "60%", xs: "40%", sm: "60%" },
            width: "100%",
            position: "absolute",
            top: 0,
            left: { xs: -4, md: 0 },
            mt: { xs: 20, md: 23 },
          }}
        />
        <CardMedia
          component="img"
          alt="Image Alt Text"
          height={{ xs: "80px", md: "230px" }}
          image={B3}
          sx={{
            width: { xs: "16%", md: "25%" },
            position: "absolute",
            top: { xs: "52%", md: "70%" },
            left: { xs: "15%", md: "16%" },
            transform: "translate(-50%, -50%)",
          }}
          className={`bounce1`}
        />
        <CardMedia
          component="img"
          alt="Image Alt Text"
          height={{ xs: "80px", md: "230px" }}
          image={B3}
          sx={{
            width: { xs: "16%", md: "25%" },
            position: "absolute",
            top: { xs: "60%", md: "80%" },
            left: { xs: "22%", md: "21%" },
            transform: "translate(-50%, -50%)",
          }}
          className={`bounce1`}
        />
        <CardMedia
          component="img"
          alt="Image Alt Text"
          height={{ xs: "80px", md: "230px" }}
          image={B4}
          sx={{
            width: { xs: "16%", md: "15%" },
            position: "absolute",
            bottom: { xs: "-55%", md: "2%" },
            right: { xs: "15%", md: "1%" },
            transform: "translate(-50%, -50%)",
          }}
          className={`bounce2`}
        />
        <CardMedia
          component="img"
          alt="Image Alt Text"
          height={{ xs: "80px", md: "230px" }}
          image={B5}
          sx={{
            width: { xs: "16%", md: "15%" },
            position: "absolute",
            top: { xs: "20%", md: "23%" },
            left: { xs: "10%", md: "10%" },
            transform: "translate(-50%, -50%)",
          }}
          className={`bounce2`}
        />
        <CardMedia
          component="img"
          alt="Image Alt Text"
          height={{ xs: "80px", md: "230px" }}
          image={B2}
          sx={{
            width: { xs: "16%", md: "20%" },
            position: "absolute",
            top: { xs: "65%", md: "22%" },
            right: { xs: "15%", md: "1%" },
            transform: "translate(-50%, -50%)",
          }}
          className={`bounce2`}
        />
        <CardMedia
          component="img"
          alt="Image Alt Text"
          height={{ xs: "80px", md: "230px" }}
          image={B6}
          sx={{
            width: { xs: "16%", md: "20%" },
            position: "absolute",
            top: { xs: "30%", md: "40%" },
            right: { xs: "6%", md: "-10%" },
            transform: "translate(-50%, -50%)",
          }}
          className={`bounce2`}
        />
      </Box>
    </Box>
  );
};

export default BannerImage;
