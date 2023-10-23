import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    greenA: "#0B7C56",
    orangeA: "#F29914",
    orangeB: "#FF6F61",
    blueblackA: "#061237",
    greyA: "#838C9E",
    whiteA: "#F7F9FC",
    whiteB: "#E3E7EC",
  },

  shadows: {
    shadowA: "0px 0px 30px 0px rgba(0, 0, 0, 0.07)",
  },
});

export default Theme;
