import * as css from "../Styles/EditorStyles";

import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const editorRef: any = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  return (
    <Box css={css.Outer}>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </Box>
  );
};

export default CodeEditor;
