import "./App.css";
import UpperSide from "./Components/UpperSide";
import LowerSide from "./Components/LowerSide";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="OuterCont">
      <UpperSide />
      <LowerSide />
    </Box>
  );
}

export default App;
