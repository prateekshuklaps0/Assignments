import {
  ISERROR,
  ISLOADING,
  SUCCESS,
  TOGGLELOGINCOMPONENT,
} from "./ActionTypes";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
const TokenLSKey = "thebrandwicktoken";

// Function for storing token in local storage
export const StoreTokenAndUserData = (token, userName) => {
  const obj = { token, userName };
  return localStorage.setItem(TokenLSKey, JSON.stringify(obj));
};

// Function for getting token from local storage
export const GetTokenAndUserData = () => {
  return JSON.parse(localStorage.getItem(TokenLSKey)) || {};
};

// SignUp
export const SIGNUP = (toast, data) => (dispatch) => {
  toast.closeAll();
  dispatch({ type: ISLOADING });
  axios({
    url: `${API_URL}/user/signup`,
    method: "post",
    data,
  })
    .then((res) => {
      // console.log(res.data);
      toast({
        title: res.data.msg,
        status: "success",
      });
      dispatch({ type: SUCCESS });
    })
    .catch((err) => {
      console.log("SignUp Error:-", err);
      const errorMsg = err.response.data.msg;
      toast({
        title: errorMsg || "Something Went Wrong!",
        description:
          !errorMsg &&
          "This looks like a server error, Please try again later.",
        status: "warning",
      });
      dispatch({ type: ISERROR });
    });
};

// Login
export const LOGIN = (toast, data) => (dispatch) => {
  toast.closeAll();
  dispatch({ type: ISLOADING });
  axios({
    url: `${API_URL}/user/login`,
    method: "post",
    data,
  })
    .then((res) => {
      // console.log(res.data);
      StoreTokenAndUserData(res.data.token, res.data.userName);
      toast({
        title: `Hi! ${res.data.userName}`,
        description: res.data.msg,
        status: "success",
      });
      dispatch({ type: SUCCESS });
    })
    .catch((err) => {
      console.log("LogIn Error:-", err);
      const errorMsg = err.response.data.msg;
      toast({
        title: errorMsg || "Something Went Wrong!",
        description:
          !errorMsg &&
          "This looks like a server error, Please try again later.",
        status: "warning",
      });
      dispatch({ type: ISERROR });
    });
};

// Logout
export const LOGOUT = (toast, data) => (dispatch) => {
  toast.closeAll();
  dispatch({ type: ISLOADING });
  axios({
    url: `${API_URL}/user/logout`,
    method: "post",
    data,
  })
    .then((res) => {
      console.log(res.data);
      localStorage.removeItem(TokenLSKey);
      toast({
        title: res.data.msg,
        status: "success",
      });
      dispatch({ type: SUCCESS });
    })
    .catch((err) => {
      console.log("LogOut Error:-", err);
      const errorMsg = err.response.data.msg;
      toast({
        title: errorMsg || "Something Went Wrong!",
        description:
          !errorMsg &&
          "This looks like a server error, Please try again later.",
        status: "warning",
      });
      dispatch({ type: ISERROR });
    });
};
