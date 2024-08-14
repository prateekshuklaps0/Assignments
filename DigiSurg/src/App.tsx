import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

// import { useEffect } from "react";

function App() {
  /*
file:///C:/Users/Prateek/Downloads/webpage.html

http://localhost:3000/

file:///C:/Users/Prateek/Downloads/webpage.pdf

http://localhost:3000/

https://chatgpt.com/c/bb3447ec-6314-4ed6-9ab6-4e87d509c2b9
*/

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
