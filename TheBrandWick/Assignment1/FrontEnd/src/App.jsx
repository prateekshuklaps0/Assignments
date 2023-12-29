import "./App.css";
import bgImg from "./Images/bg1.jpg";
import LoginSignup from "./Component/LoginSignup";
import Profile from "./Component/Profile";
import { GetTokenAndUserData, LOGOUT } from "./Redux/Action";

import { Box, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [{ userName, token }, setTokenAndUserData] = useState(
    GetTokenAndUserData()
  );
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    setTokenAndUserData(GetTokenAndUserData());
  }, [isLoading]);

  const handleLogout = () => {
    let data = { token };
    dispatch(LOGOUT(toast, data));
  };

  return (
    <Box
      id="App"
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.349), rgba(0, 0, 0, 0.322)), url(${bgImg})`}
    >
      {token ? (
        <Profile userName={userName} handleLogout={handleLogout} />
      ) : (
        <LoginSignup />
      )}
    </Box>
  );
}

export default App;
