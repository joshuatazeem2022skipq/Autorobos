import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import { SideBar } from "../Appbar/Sidebar";
import Footer from "../Footer/Footer";

const Main = ({ activePage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Box>
      {isHomePage && <SideBar />}

      <Box position="relative">
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Appbar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            zIndex: 0,
          }}
        >
          {activePage}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
