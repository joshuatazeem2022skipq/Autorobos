import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  CardActions,
  Container,Chip,
  Grid,
  IconButton,
  Typography,

  Pagination,
} from "@mui/material";
import React, { useState } from "react";

import BG from "../../Images/Aboutus/1jy.jpg";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import store from "../../Store/store";

const Blogs = () => {

  const [hoveredCard, setHoveredCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const itemsPerPage = 4;

  const [page, setPage] = useState(1);

const blogsData= useSelector((store)=>store.BlogSection.blogs)

  const pageCount = Math.ceil(blogsData.length / itemsPerPage);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

 const renderCards = () => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = blogsData.slice(startIndex, endIndex);

  return slicedData.map((blog, index) => (
    <Grid item xs={12} sm={6} md={4.5} key={index}>
      <Card
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        variant="outlined"
        sx={{
          backgroundImage: hoveredCard === index? `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)),url(${blog.image})` : null,
          backgroundSize:"cover",
          height: "80%",
          width: "450px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          border: "2px solid #303030",
          backgroundColor: "#0b0c10",
          // transition: "transform 0.3s ease",
          // transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
          "&:hover": {
            border: "2px solid #0ba7a2",
            // transform: "scale(1.05)", // Apply transform only on hover
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {hoveredCard !== index && (
            <CardMedia
              component="img"
              sx={{
                height: "80%",
                width: "100%",
                objectFit: "cover",
              }}
              image={blog.image}
              alt={blog.heading}
            />
          )}
          <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
              {blog.heading}
            </Typography>
            {hoveredCard === index && (
              <Typography variant="body2" sx={{ color: "grey", flexGrow: 1 }}>
                {blog.description}
              </Typography>
            )}
          </CardContent>
        </Box>
      </Card>
    </Grid>
  ));
};


  return (
    <div
      style={{
        background: `url(${BG})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box mb={4}>
      <Chip
                              label="Our Blogs"
                              variant="outlined"
                              sx={{
                                backgroundColor: "transpparent",
                                color: "#0ba7a2",
                                border: "1px solid #303030",
                                padding : 3,
                                fontWeight: "bold",
                                ml:8,
borderRadius: 13,
                                letterSpacing: 1.5,
                                mt: 9,
                                filter: "brightness(150%)",
                              }}
                            />
        <Typography variant="body1" align="center" sx={{mt:3}}>
          Visit our latest Blogs for up-to-date
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {renderCards()}
      </Grid>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChangePage}
        color="primary"
        size="large"
        siblingCount={1}
        boundaryCount={1}
        sx={{
          marginBottom: 2,
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .Mui-selected": {
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default Blogs;
