// Import React and Material UI components
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
  Avatar,
} from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

const typographyStyle = {
  color: "#394273",
  fontWeight: "bold",
};

const Text = [
  {
    id: 1,
    backgroundColor: "#f2f5ff",
    color: "#466efe",
    title: "Quality Support",
    desc: "Learn content by interacting anything expert lesson a video.",
  },
  {
    id: 2,
    backgroundColor: "#fde8ff",
    color: "#f36fff",
    title: "Fastest AI Machine",
    desc: "Practice what you realistic test great questions lorem.",
  },
  {
    id: 3,
    backgroundColor: "#ffefe8",
    color: "#ff9061",
    title: "Great Pricing",
    desc: "Review your practice & learn how to improve your skill.",
  },
];

function Quality() {
  return (
    <>
      <Box sx={{ mt: { md: -9.5, xs: 0, sm: 0 } }}>
        <Box
          sx={{
           
            minHeight: { md: "60vh", xs: "100vh", sm: "90vh" },
            py: 4,
            backgroundColor: "#0b0c10",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              backgroundColor: "#1a1a1a",  
              boxShadow: "10px solid white",
              border: "1px solid #303030",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              height: { md: 270, xs: "100vh", sm: "80vh" },
              width: { md: "74%", sm: "70%", xs: "80%" },
              position: "absolute",
              zIndex: 4,
              borderRadius: "30px",
              "@media (max-width: 600px)": {
                height: "79vh",
                mt: 6,
                position: "absolute",
                zIndex: 4,
              },
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                {Text.map((text, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={4}
                    key={text.id}
                    sx={{ ml: { md: 0, sm: 6 } }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        mt: 3,
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: "#0ba7a2",
                          color: text.color,
                        }}
                      >
                        <DownloadDoneIcon />
                      </Avatar>
                    </Box>
                    <Typography
                      style={typographyStyle}
                      variant="h6"
                      sx={{
                        mt: 2,
                        color: "white!important",
                        fontFamily: "revert-layer",
                        textAlign: "center",
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
                        textAlign: "center",
                        ml: { md: 6, sm: 3, xs: 4 },
                      }}
                    >
                      {text.desc}
                    </Typography>
                    {index !== Text.length - 1 && (
                      <Divider
                        orientation="vertical"
                        sx={{
                          mt: -13,
                          height: "30%",
                          position: "absolute",
                          ml: 45,
                        }}
                      />
                    )}
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Quality;
