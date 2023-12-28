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
  // toast.closeAll;
  dispatch({ type: ISLOADING });
  axios({
    url: `${API_URL}/user/signup`,
    method: "post",
    data,
  })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUCCESS });
      dispatch({ type: TOGGLELOGINCOMPONENT });
    })
    .catch((err) => {
      console.log("SignUp Error:-", err);
      dispatch({ type: ISERROR });
    });
};

// Login
export const LOGIN = (toast, data) => (dispatch) => {
  // toast.closeAll;
  dispatch({ type: ISLOADING });
  axios({
    url: `${API_URL}/user/login`,
    method: "post",
    data,
  })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SUCCESS });
      // dispatch({ type: TOGGLELOGINCOMPONENT });
    })
    .catch((err) => {
      console.log("SignUp Error:-", err);
      dispatch({ type: ISERROR });
    });
};
