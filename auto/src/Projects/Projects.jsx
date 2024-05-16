import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Menu,
  MenuItem,
  Pagination,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import BgImage from "../Images/Projects/13.jpg";
import P11 from "../Images/bg6.avif";

import ListIcon from "@mui/icons-material/List";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import store from "../Store/store";

const t1 = { textAlign: "center", color: "#fff", mt: { md: 5, xs: 17 } };
const t2 = { textAlign: "center", color: "#fff", p: 3 };
// const C1 = { display: "flex", flexWrap: "wrap", justifyContent: "center" };
const card = {
  maxWidth: 345,
  margin: "1em",
  mt: 5,
  background: "#121e1c",
  color: "white",
  borderRadius: "15px",
  border: "2px solid #d8e1e6",
};
const cardMedia = {
  "&:hover": {
    filter: "brightness(90%)",
    transform: "scale(1.1)",
    opacity: 0.9,
    transition: "transform .7s ease, opacity 0.3s ease-in-out",
  },
};

const categories = [
  "All",
  "Automation",
  "IoT",
  "Machine Learning",
  "Embedded Systems",
  "Robotics",
  "Digital Marketing",
  "Web Development",
  "App Development",
  "SEO",
  "Graphics",
];

const StyledCard = styled(Card)({
  overflow: "hidden",
  // maxWidth: "100%",
  // height: "auto",
  // boxShadow: "30px",
  // borderRadius: "20px",
  maxWidth: 345,
  margin: "1em",
  mt: 5,
  background: "#121e1c",
  color: "white",
  borderRadius: "18px",
  border: "2px solid #d8e1e6",
});

// const StyledCardMedia = styled(CardMedia)({
//   "&:hover": {
//     filter: "brightness(70%)",
//     transform: "scale(1.1)",
//     opacity: 0.8,
//     transition: "transform 1s ease, opacity 0.3s ease-in-out",
//   },
// });

const Project = () => {
 

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const projectsPerPage = 6;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const projects = useSelector(((store)=>store.ProjectSection.projects))

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = page * projectsPerPage;
 
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)), url(${P11})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { md: "60vh", xs: "100vh" },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: -11,
        }}
      >
        <Container>
          <Typography variant="h3" sx={t1}>
            We pledge ourselves to outstanding project
          </Typography>
          <Typography variant="inherit" sx={t2}>
            Explore our impressive portfolio of <b>automation projects</b> where
            we have harnessed the power of technology to streamline processes,
            enhance efficiency, and drive innovation. Our team's expertise in
            automation spans across various industries, from manufacturing and
            logistics to healthcare and finance. Discover how we've helped
            businesses achieve their automation goals and stay ahead in today's
            fast-paced digital landscape.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#0b0c10" }}>
        <Box sx={{ pt: 5, color: "whitesmoke" }}>
          <Typography variant="h3" align="center">
            Explore Our Portfolio
          </Typography>
          <Typography variant="h6" align="center">
            Discover a diverse range of innovative solutions crafted to meet
            your needs.
          </Typography>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? "contained" : "outlined"}
              color="primary"
              sx={{
                m: 1,
              }}
            >
              {category}
            </Button>
          ))}
        </Box> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
            mb: 5,
            flexWrap: "wrap",
          }}
        >
          {!isMobile && (
            <>
              <Box
                textAlign="center"
                // sx={{
                //   top: 0,
                //   m: "auto",
                //   zIndex: 1,
                // }}
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    variant={
                      selectedCategory === category ? "contained" : "outlined"
                    }
                    color="primary"
                    sx={{
                      m: 1,
                      mt: 2,
                      backgroundColor: "transparent",
                      border: "1px solid #303030",
                      borderRadius: 13,
                      padding:1,
                      color: "#0ba7a2",
                      "&:hover": {
                        backgroundColor: "white!important",
                        color: "#0ba7a2",
                      },
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </Box>
            </>
          )}
          {isMobile && (
            <>
              <Button
                onClick={handleMenuOpen}
                variant="outlined"
                color="primary"
                startIcon={<ListIcon />}
                sx={{ m: 2, mr: "auto" }}
              >
                Projects Category
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={() => {
                      handleCategoryChange(category);
                      handleMenuClose();
                    }}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: "20px",
          }}
        >
          <Container
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {currentProjects.map((project) => (
              <Card key={project.id} sx={card}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    alt={project.title}
                    height="180"
                    image={project.img}
                    sx={cardMedia}
                  />
                </StyledCard>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="GrayText">
                    {project.desc}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            ))}
          </Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "white!important"
            }}
          >
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChangePage}
              sx={{ mb: 3, mt: 4 ,color: "white!important"}}
            />
          </Box>

        </Box>
        <Box sx={{ backgroundColor: "#0b0c10", mb:1 }}>
      <Container
        sx={{
          backgroundImage: `url(${BgImage})`,
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
    </>
  );
};

export default Project;
