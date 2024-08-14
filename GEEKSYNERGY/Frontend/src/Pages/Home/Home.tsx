import css from "./Home.module.css";
import { GetLsData } from "../../Redux/Action";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import { useEffect } from "react";
import {
  Home_Data_Success,
  Is_Error_Home_Data,
  Is_Loading_Home_Data,
} from "../../Redux/AuthSlice";

const Home = () => {
  const userName = GetLsData()?.name || "";
  const dispatch = useAppDispatch();
  const userDataHomepage = useAppSelector(
    (state) => state.auth.userDataHomepage
  );
  const isDataLoading = useAppSelector((state) => state.auth.isDataLoading);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    if (isDataLoading) return;
    dispatch(Is_Loading_Home_Data());
    const token = GetLsData()?.token || "";
    try {
      const fethcHomeDataRes = await axios.get<any>(`${API_URL}/auth/users`, {
        headers: { Authorization: token },
      });
      dispatch(Home_Data_Success({ data: fethcHomeDataRes?.data || [] }));
      // console.log("Home Data Fetch :", fethcHomeDataRes?.data);
    } catch (error: any) {
      console.log("Home Data Fetch :", error);
      toast.error(error?.response?.data?.msg || "Something Went Wrong");
      dispatch(Is_Error_Home_Data());
    }
  };

  return (
    <div className={css.Outer}>
      {userName && <h2>Hi {userName},</h2>}
      {isDataLoading && <p>Loading Users Data...</p>}
      {!isDataLoading && userDataHomepage.length > 0 && (
        <pre className={css.codeEditorCss}>
          {JSON.stringify(userDataHomepage)}
        </pre>
      )}
    </div>
  );
};

export default Home;
