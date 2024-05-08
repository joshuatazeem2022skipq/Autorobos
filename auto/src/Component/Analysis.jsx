import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import A1 from "../Images/Analysis/ils_05.png";
import A2 from "../Images/Analysis/ils_05_1.png";
import "../Styles/Gobal.css";

const ListText = [
  { id: 1, title: "Various analysis options." },
  { id: 2, title: "Page Load (time, size, number of requests)." },
  { id: 3, title: "Big data analysis." },
  { id: 4, title: "Advance Data analysis operation." },
];

const Analysis = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: "700px",
              ml: { md: 0, xs: 0, sm: -15 },
            }}
          >
            <CardMedia
              component="img"
              alt="Background Image"
              image={A1}
              sx={{
                height: { md: "100%", xs: "90%" },
                width: { md: "75%", xs: "85%" },
                position: "absolute",
                top: 0,
                left: { xs: "19%" },
              }}
            />
            <CardMedia
              className={`bounce`}
              component="img"
              alt="Image Alt Text"
              // height="450"
              image={A2}
              sx={{
                height: { md: "320px", xs: "320", sm: "270px" },
                width: { md: "21%", xs: "30%", sm: "16%" },
                position: "absolute",
                top: { md: "14%", xs: "23%", sm: "20%" },
                left: { md: "47%", xs: "48%", sm: "54.5%" },
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Chip
            label="OVER 150K+ CLIENT"
            variant="outlined"
            alignItems="flex-st34art"
            sx={{
              backgroundColor: "#e6ecff",
              color: "#5497ff",
              fontWeight: "bold",
              letterSpacing: 1.5,
              border: "none",
              mt: { md: 0 },
              alignSelf: "lef   t",
              ml: { md: 15, xs: 10, sm: 14 },
            }}
          />
          <Box
            sx={{
              ml: { md: 15, xs: 10, sm: 14 },
            }}
          >
            <Typography
              variant="h2"
              align="left"
              sx={{
                mt: 4,
                fontFamily: "inherit",
                fontWeight: 500,
                color: "whitesmoke",
                width: "70%",
              }}
            >
              World's best AI for your business.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                mt: 4,
                fontFamily: "inherit",
                fontWeight: 320,
                width: "70%",
                color: "#96a6b6",
              }}
            >
              AI technology is perfect for the best business solutions, and we
              offer help to achieve your goals.
            </Typography>
            <List
              sx={{
                mt: 4,
                fontFamily: "inherit",
                ml: -2,
                width: { md: "100%", xs: "90%" },
              }}
            >
              {ListText.map((item) => (
                <ListItem key={item.id}>
                  <ListItemIcon sx={{ color: "HighlightText" }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{ color: "HighlightText", fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="body1"
                    align="left"
                    color="HighlightText"
                    sx={{
                      mt: 2,
                      // border: "1px solid black",
                      width: "100%",
                      display: "inline-block",
                    }}
                  >
                    Want to learn more about us:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#5497ff",
                      mt: 2,
                      "&:hover": { color: "#FF7A41" },
                    }}
                  >
                    Click Here <KeyboardDoubleArrowRightIcon />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Analysis;
