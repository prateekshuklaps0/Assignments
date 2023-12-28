import "./App.css";
import bgImg from "./Images/bg1.jpg";
import LoginSignup from "./Component/LoginSignup";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      id="App"
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.349), rgba(0, 0, 0, 0.322)), url(${bgImg})`}
    >
      <LoginSignup />
    </Box>
  );
}

export default App;
