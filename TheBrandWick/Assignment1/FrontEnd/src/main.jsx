import "./index.css";
import App from "./App.jsx";
import { Store } from "./Redux/Store.js";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
