import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ContactMap = () => {
  return (
    <Box bgcolor="white" color="black">
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {/* First column */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            height="100%"
            paddingY={2}
          >
            <Typography variant="h4" gutterBottom>
              Office Location
            </Typography>
            <Typography variant="h6" gutterBottom>
              Can visit us for further queries
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Office Hours:
              <br />
              Mon - Fri: 12 pm to 12 am
              <br />
              Sat: 6 pm to 12 am
              <br />
              Sunday: Off
            </Typography>
            <Typography variant="body1" gutterBottom>
              Find the office address by yourself...{" "}
            </Typography>
          </Box>
        </Grid>

        {/* Second column */}
        <Grid item xs={12} md={6}>
          <Box
            paddingY={2}
            sx={{
              overflow: "hidden",
              // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)",
              m: 3,
            }}
          >
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.77341636042!2d72.98817628311073!3d31.549700728722194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c923c2af7c09d%3A0x80a3b786928df1bf!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1644991360279!5m2!1sen!2sus"
              style={{
                transition: "filter 0.8s",
                filter: "brightness(30%)",
                borderBlockColor: "#ffffff",
                borderRadius:12,
                borderBlockEndStyle: "initial",
              }}
              onMouseOver={(e) => (e.target.style.filter = "brightness(100%)")}
              onMouseOut={(e) => (e.target.style.filter = "brightness(50%)")}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMap;
