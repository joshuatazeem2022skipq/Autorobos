import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import brandImg from "../Images/B.png";
import { Colors } from "../Styles/Theme";
import {
  Avatar,
  Card,
  CardHeader,
  Link,
  Slide,
  useMediaQuery,
} from "@mui/material";

const socialMedia = [
  { id: 0, title: "Instagram", path: "/instagram" },
  { id: 1, title: "Facebook", path: "/facebook" },
  { id: 2, title: "LinkedIn", path: "/linkedin" },
];

export const SideBar = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const prevScrollY = React.useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY.current) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobileOrTablet = useMediaQuery("(max-width: 1400px)");

  return (
    <Box
      sx={{ display: "flex", position: "fixed", zIndex: 1, top: 0, left: 0 }}
    >
      <CssBaseline />
      {!isMobileOrTablet && (
        <Card
          variant="permanent"
          position="relative"
          anchor="left"
          component="paper"
          elevation={1}
          sx={{
            width: "150px",
            height: "100vh",
            color: Colors.body_bg,
            fontWeight: "bold",
            backgroundColor: "transparent",
          }}
        >
          <Box>
            <Slide direction="down" in={isVisible} timeout={500}>
              <CardHeader
                avatar={
                  <Avatar
                    src={brandImg}
                    variant="square"
                    sx={{
                      width: "90px",
                      height: "54px",
                      mt: 5,
                      mb: 2,
                      ml: 1.5,
                    }}
                  />
                }
              />
            </Slide>

            {socialMedia.map((item) => (
              <Typography
                key={item.id}
                color="black"
                variant="body1"
                sx={{
                  ml: 6,
                  mt: 14,
                  mr: 2,
                  transform: "rotate(-90deg)",
                  transformOrigin: "0 0",
                  textAlign: "left",
                  fontSize: "22px",
                }}
              >
                <Link
                  href={item.path}
                  sx={{
                    color: "#0078d7",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": {
                      textDecoration: "line-through",
                    },
                  }}
                >
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Box>
        </Card>
      )}
    </Box>
  );
};
