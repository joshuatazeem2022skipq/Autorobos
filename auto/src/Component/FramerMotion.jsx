import { Box, Typography } from "@mui/material";
import React from "react";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  Animator,
} from "react-scroll-motion";
import "../Styles/scrolling.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const ImageScroll = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              The is thing is not reliable is not abrevation
            </Typography>
          </Box>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              I' FadeUpScrollOut{" "}
            </Typography>
          </Box>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              I' FadeUp{" "}
            </Typography>
          </Box>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <div className="section-3">
          <Typography variant="h2">
            <Animator animation={MoveIn(-1000, 0)}>
              <Box>
                <Typography variant="h4" sx={{ color: "white" }}>
                  Hello Guys
                </Typography>
              </Box>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
              <Box>
                <Typography variant="h4" sx={{ color: "white" }}>
                  Nice to meet you
                </Typography>
              </Box>
            </Animator>
            <Animator animation={MoveOut(1000, 0)}>
              <Box>
                <Typography variant="h4" sx={{ color: "white" }}>
                  GoodBye
                </Typography>
              </Box>
            </Animator>
            <Animator animation={MoveOut(-1000, 0)}>
              <Box>
                <Typography variant="h4" sx={{ color: "white" }}>
                  Good Night
                </Typography>
              </Box>
            </Animator>
          </Typography>
        </div>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              Done
            </Typography>
          </Box>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ImageScroll;
