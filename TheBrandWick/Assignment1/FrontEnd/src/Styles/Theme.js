import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "orange",
    whiteA: "white",
    whiteb: "#f1f1f1",
    orangeA: "#FF5E0E", // Vivid Orange
    greyA: "rgb(117, 115, 115)", // greyA
  },
  shadows: {
    shadowA: "0px 8px 24px 0px rgba(140, 149, 159, 0.2)",
    shadowB: "0px 3px 8px rgba(0, 0, 0, 0.24)",
  },
  fonts: {
    k2d: "K2D",
    nun: "'Nunito', sans-serif",
    ver: "'Varela Round', sans-serif",
    megrim: "'Megrim', cursive",
  },
});

export default Theme;
