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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import P1 from "../Images/Projects/P1.jpg";
import P2 from "../Images/Projects/p2.jpg";
import P3 from "../Images/Projects/p3.jpg";
import P4 from "../Images/Projects/p4.jpg";
import P5 from "../Images/Projects/p5.jpg";
import P6 from "../Images/Projects/p6.jpg";
import P7 from "../Images/Projects/p7.jpg";
import P8 from "../Images/Projects/p8.jpg";
import P9 from "../Images/Projects/p9.jpg";
import P10 from "../Images/Projects/p10.jpg";
import P11 from "../Images/Projects/13.jpg";
import ListIcon from "@mui/icons-material/List";
import { styled } from "@mui/system";

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
  const projects = [
    {
      id: "01",
      img: P1,
      title: "Warehouse Robotics",
      desc: "Develop an automated warehouse system with robots that can efficiently manage inventory, pick and pack orders, and optimize storage space.",
      category: "Robotics",
    },
    {
      id: "02",
      img: P2,
      title: "Home Automation System",
      desc: "Create a smart home system that allows users to control lighting, heating, and security remotely through a web application. Integrate IoT devices for real-time monitoring and control.",
      category: "Automation",
    },
    {
      id: "03",
      img: P3,
      title: "IoT Weather Station",
      desc: "Build a weather station using IoT sensors to collect and transmit data to a web application for real-time weather monitoring and forecasting.",
      category: "IoT",
    },
    {
      id: "04",
      img: P4,
      title: "Industrial Automation",
      desc: "Implement an industrial automation solution using embedded systems to control manufacturing processes and monitor equipment health through a web-based dashboard.",
      category: "Automation",
    },
    {
      id: "05",
      img: P5,
      title: "Smart Agriculture",
      desc: "Create a system that combines IoT sensors, robotics, and a web application to optimize farming operations by monitoring soil conditions, irrigation, and crop health",
      category: "Machine Learning",
    },
    {
      id: "06",
      img: P6,
      title: "Home Security Robot",
      desc: "Design a robot with embedded vision capabilities for home security purposes, allowing users to control and monitor their homes remotely.",
      category: "Robotics",
    },
    {
      id: "07",
      img: P7,
      title: "IoT-Based Healthcare",
      desc: "Develop a healthcare system that uses IoT sensors to monitor patient health and send data to a web platform for doctors and caregivers to access.",
      category: "IoT",
    },
    {
      id: "08",
      img: P8,
      title: "Autonomous Delivery Drone",
      desc: "Build an autonomous delivery drone system that uses embedded systems for navigation and a web application for tracking and managing deliveries",
      category: "Machine Learning",
    },
    {
      id: "09",
      img: P9,
      title: "Greenhouse Automation",
      desc: "Create an automated greenhouse system that regulates temperature, humidity, and irrigation using IoT sensors and a web-based control panel.",
      category: "Automation",
    },
    {
      id: "10",
      img: P10,
      title: "Smart Parking System",
      desc: "Develop a smart parking solution with embedded sensors in parking spaces, providing real-time availability information through a web or mobile app.",
      category: "Embedded Systems",
    },
  ];

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
          backgroundImage: `url(${P11})`,
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
      <Box sx={{ backgroundColor: "#fcfdff" }}>
        <Box sx={{ pt: 5 }}>
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
            }}
          >
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChangePage}
              sx={{ mb: 3, mt: 4 }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Project;
