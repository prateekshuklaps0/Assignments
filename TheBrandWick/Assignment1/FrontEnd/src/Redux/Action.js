import {
  ISERROR,
  ISLOADING,
  SUCCESS,
  TOGGLELOGINCOMPONENT,
} from "./ActionTypes";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

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
      dispatch({ type: TOGGLELOGINCOMPONENT });
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
