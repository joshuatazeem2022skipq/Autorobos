import React from "react";
import Services from "../Component/Services";

// import ServicesExp from "../Services/ServicesExp";
import ServiceComponent from './../Services/Services';
import { Box } from "@mui/system";

const ServicePage = () => {
  return (
    <Box sx={{backgroundColor:"#0b0c10"}}>
    <ServiceComponent></ServiceComponent>
      {/* <ServicesExp /> */}
    </Box>
  );
};

export default ServicePage;
