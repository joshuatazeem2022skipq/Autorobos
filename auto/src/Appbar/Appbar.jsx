import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  CardMedia,
  Drawer,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Logo from "../Images/B.png";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const buttons = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Company",
    dropdown: true,
    options: [
      { id: 1, title: "About Us", path: "/company#aboutUs" },
      { id: 2, title: "Blogs", path: "/company#blogs" },
      { id: 3, title: "Career", path: "/company#career" },
    ],
  },
];

const MyAppBar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [companyButtonText, setCompanyButtonText] = useState("Company");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletView = useMediaQuery("(max-width: 1300px)");
  const location = useLocation();

  console.log(setCompanyButtonText);
  const handleMenuToggle = (buttonId, event) => {
    if (event) {
      event.preventDefault();
    }
    if (anchorEl === buttonId) {
      setAnchorEl(null);
    } else {
      setAnchorEl(buttonId);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (path, event) => {
    if (event) {
      event.preventDefault();
    }

    const currentPath = location.pathname;
    const targetPath = path.split("#")[0];
    const sectionId = path.split("#")[1];

    if (currentPath === targetPath) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(targetPath);
    }
    handleMenuClose();
  };

  useEffect(() => {
    const sectionId = location.hash.substr(1);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <AppBar position="static" sx={{height:"90px",boxShadow: "none!important" , paddingTop: 2, backgroundColor: "transparent" }}>
      <Toolbar
        sx={{
          justifyContent: "center",
          
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={2} sm={2} md={2}>
            <IconButton
              color="inherit"
              aria-label="menu"
              sx={{ ml: { md: 11, xs: 0, sm: 0 } }}
            >
              <CardMedia
                onClick={handleLogoClick}
                component="img"
                image={Logo}
                style={{ width: 110 }}
              />
            </IconButton>
          </Grid>
          {(isMobileView || isTabletView) && (
            <Grid
              item
              xs={8}
              sm={8}
              md={8}
              display="flex"
              justifyContent="flex-end"
            >
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ p: 0 }}
              >
                <MenuIcon
                  sx={{
                    width: "70px",
                    height: "50px",
                    mr: { xs: -6, sm: -23 },
                  }}
                />
              </IconButton>
            </Grid>
          )}
          {!isMobileView && !isTabletView && (
            <Grid
              item
              xs={8}
              sm={8}
              md={5}
              sx={{border: "2px solid #303030", borderStyle: "solid",borderRadius:15, textAlign: "center", paddingX: 1,padding: 1,ml: 23 }}
            >
              {buttons.map((button) => (
                <React.Fragment key={button.id}>
                  {button.dropdown ? (
                    <>
                      <Button
                        aria-controls={button.id.toString()}
                        aria-haspopup="true"
                        onClick={(event) => handleMenuToggle(button.id, event)}
                        sx={{
                          borderRadius: 9,
                          color: anchorEl === button.id ? "#5497ff" : "white",
                          textTransform: "capitalize",
                          fontSize: "1.2rem",
                          "&:hover": {
                            backgroundColor: "#0ba7aa",
                            color: "white",
                          },
                        }}
                      >
                        {companyButtonText}
                        {anchorEl === button.id ? (
                          <ArrowLeftIcon />
                        ) : (
                          <ArrowDropDownIcon />
                        )}
                      </Button>
                      <Menu
                        id={button.id.toString()}
                        anchorEl={anchorEl === button.id ? anchorEl : null}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        getContentAnchorEl={null}
                        open={Boolean(anchorEl === button.id)}
                        onClose={() => setAnchorEl(null)}
                        sx={{ ml: -42, mt: 6 }}
                      >
                        {button.options.map((option) => (
                          <MenuItem
                            key={option.id}
                            onClick={() => handleMenuClick(option.path)}
                            component={Link}
                            to={option.path}
                          >
                            {option.title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      color="inherit"
                      component={Link}
                      to={button.path}
                      sx={{
                        borderRadius: 9,
                        padding:1,
                        textTransform: "capitalize",
                        color: anchorEl === button.id ? "#0ba7aa" : "white",
                        marginRight: 2,
                        fontSize: "1.1rem",
                        "&:hover": {
                          backgroundColor: "#0ba7aa",
                          color: "white",
                        },
                      }}
                      onClick={() => handleMenuToggle(button.id)}
                    >
                      {button.title}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          )}
          {!isMobileView && (
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              sx={{ textAlign: "end", ml: { md: 20, sm: -12 } }}
            >
              <Button
                color="error"

                component={Link}
                to="/contactUs"
                sx={{
                  textTransform: "capitalize",
                  color: "white",border: "2px solid #303030",                 
                   width: "130px",
                  borderRadius: 7,
                  backgroundColor: "transparent",
                  marginLeft: 1,
                  fontSize: "1.2rem",
                  transition: "background-color 0.4s, color 0.3s",
                  "&:hover": {
                    backgroundColor: "#0ba7aa",
                    color: "white",
                  },
                }}
              >
                Contact Us
              </Button>
            </Grid>
          )}
        </Grid>
      </Toolbar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: "22px",
            borderBottomLeftRadius: "22px",
          },
        }}
      >
        <Box
          sx={{
            width: { sm: "500px", xs: "300px" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#131E3A",
            height: "100%",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <CardMedia
            component="img"
            src={Logo}
            sx={{
              width: { md: "50%", sm: "30%", xs: "100px" },
              ml: "auto",
              mt: 2,
              mb: 4,
              mr: 10,
            }}
          />
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ position: "absolute", top: "0px", right: "13px" }}
          >
            <CancelIcon />
          </IconButton>
          {buttons.map((button) => (
            <div key={button.id}>
              <Button
                onClick={() => {
                  toggleDrawer();
                  if (button.dropdown) {
                    handleMenuToggle(button.id);
                  } else {
                    navigate(button.path);
                  }
                }}
                sx={{ my: 1, color: "white" }}
              >
                {button.title}
              </Button>
            </div>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MyAppBar;
