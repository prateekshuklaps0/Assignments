import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

// import { useEffect } from "react";

function App() {
  // const handleContextmenu = (e: any) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   document.addEventListener("contextmenu", handleContextmenu);
  //   return function cleanup() {
  //     document.removeEventListener("contextmenu", handleContextmenu);
  //   };
  // }, []);

  return (
    <div id="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
