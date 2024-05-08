import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Pagination,
} from "@mui/material";
import React, { useState } from "react";
import B1 from "../../Images/Projects/P1.jpg";
import B2 from "../../Images/Projects/p2.jpg";
import B3 from "../../Images/Projects/p3.jpg";
import B4 from "../../Images/Projects/p4.jpg";
import BG from "../../Images/Aboutus/1jy.jpg";
import { styled } from "@mui/system";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      image: B1,
      heading: "Automation",
      author: "Author Name 1",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 2,
      image: B2,
      heading: "Internet of Things",
      author: "Author Name 2",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 3,
      image: B3,
      heading: "Embedded AI",
      author: "Author Name 3",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 4,
      image: B4,
      heading: "Web Development",
      author: "Author Name 4",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 5,
      image: B2,
      heading: "App Development",
      author: "Author Name 5",
      date: "March 21, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
  ];

  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(blogsData.length / itemsPerPage);
  const [isHovered, setIsHovered] = useState(false);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const renderCards = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = blogsData.slice(startIndex, endIndex);

    return slicedData.map((blog, index) => (
      <Grid
        item
        key={blog.id}
        xs={12}
        sm={index === 0 || index === 3 ? 6 : 4}
        justifyContent="center"
      >
        <Container>
          <Card sx={{ display: "flex", height: 200, m: 1 }}>
            <CardMedia
              component="img"
              sx={{
                width: index === 0 || index === 3 ? 200 : 140,
                maxWidth: "100%",
                transition: "transform 0.3s ease-in-out",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
              image={blog.image}
              alt={blog.heading}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />

            <CardContent sx={{ flex: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {blog.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span>{blog.author}</span>
                <span style={{ marginLeft: "auto" }}>{blog.date}</span>
              </Typography>
              <Typography variant="body1" component="p">
                {blog.description}
              </Typography>
            </CardContent>
          </Card>
        </Container>
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
        <Typography variant="h3" align="center">
          Blogs
        </Typography>
        <Typography variant="body1" align="center">
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
