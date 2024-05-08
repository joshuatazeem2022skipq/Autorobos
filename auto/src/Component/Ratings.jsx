// Import React and Material UI components
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
} from "@mui/material";

// Define a custom style for the card

const typographyStyle = {
  color: "#0066ff",
  fontWeight: "bold",
};

const Text = [
  { id: 1, title: "20mil", desc: "Human labor hours saved with help of AI" },
  { id: 2, title: "1.3b+", desc: "Generated revenue by AI solutions" },
  { id: 3, title: "$15mil+", desc: "Saved operational costs due to AI" },
];

function RatingsComponent() {
  return (
    <Card
      sx={{
        boxShadow: 20,
        // boxShadow: "0px 4px 6px rgba(246, 252, 255, .1)",
        height: { xs: "100vh" },
        width: "74%",
        height: 230,
        background: "white",

        position: "absolute",
        zIndex: 4,
        borderRadius: "30px",
        "@media (max-width: 600px)": {
          height: 600,
          mt: 40,
          ml: 4,
          position: "absolute",
          zIndex: 4,
        },
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          {Text.map((text, index) => (
            <Grid item xs={12} sm={4} key={text.id}>
              <Typography
                style={typographyStyle}
                variant="h3"
                sx={{
                  mt: 5,
                  fontFamily: "revert-layer",
                }}
              >
                {text.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "#9babb9",
                  fontFamily: "revert-layer",
                  border: "0px solid black",
                  width: "70%",
                  ml: 6,
                }}
              >
                {text.desc}
              </Typography>
              {index !== Text.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{ mt: -13, height: "30%", position: "absolute", ml: 45 }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default RatingsComponent;
