import "./App.css";
import Controls from "./Components/Controls";
import CodeEditor from "./Components/EditorComp";

import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box className="OuterCont">
      <Text>Code Converter, Debugger, Quality Checker App</Text>

      <Controls />
      <CodeEditor />
    </Box>
  );
}

export default App;
