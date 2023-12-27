import * as css from "../Styles/EditorStyles";

import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const diffEditorRef: any = useRef(null);

  // function handleEditorDidMount(editor: any, monaco: any) {
  //   diffEditorRef.current = editor;
  // }

  function showOriginalValue() {
    alert(diffEditorRef.current.getOriginalEditor().getValue());
  }

  function showModifiedValue() {
    alert(diffEditorRef.current.getModifiedEditor().getValue());
  }

  return (
    <Box css={css.Outer}>
      <button onClick={showOriginalValue}>show original value</button>
      <button onClick={showModifiedValue}>show modified value</button>
      <Editor
        height="200px"
        language="javascript"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        // modified="// the modified code"
        // onMount={handleEditorDidMount}
      />
    </Box>
  );
};

export default CodeEditor;
