import "./App.css";

import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

function App() {
  return (
    <Box className="OuterCont">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// Print something"
      />
    </Box>
  );
}

export default App;
