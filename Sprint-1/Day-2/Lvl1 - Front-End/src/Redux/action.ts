import axios from "axios";
import { Dispatch } from "redux";

import { LOADING, ERROR, SUCCESS } from "./actionTypes";

export const SendRequest =
  (content: string, keyword: string) => (dispatch: Dispatch) => {
    dispatch({ type: LOADING });
    console.log("Started");

    axios({
      url: `${import.meta.env.VITE_API}/shayari`,
      method: "get",
      params: { content, keyword },
    })
      .then((res) => {
        dispatch({ type: SUCCESS, payload: res.data });
        console.log("Completed");
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err?.response?.data?.error });
        console.log("Error :", err?.response?.data?.error);
      });
  };
