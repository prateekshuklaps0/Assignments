import css from "./Home.module.css";
import { DeleteLsData, GetLsData } from "../../Redux/Action";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

import { useAppDispatch, useAppSelector } from "../../Redux/Store";

import {
  Change_Inp_Val,
  Home_Data_Success,
  Is_Error,
  Is_Error_Home_Data,
  Is_Loading,
  Is_Loading_Home_Data,
  Register_Success,
} from "../../Redux/AuthSlice";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userName = GetLsData()?.name || "";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showUpdate, setShowUpdate] = useState(false);
  const userDataHomepage = useAppSelector(
    (state) => state.auth.userDataHomepage
  );
  const isDataLoading = useAppSelector((state) => state.auth.isDataLoading);
  const name = useAppSelector((state) => state.auth.name);
  const email = useAppSelector((state) => state.auth.email);
  const profession = useAppSelector((state) => state.auth.profession);
  const phone = useAppSelector((state) => state.auth.phone);
  const password = useAppSelector((state) => state.auth.password);
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  useEffect(() => {
    FetchData();
  }, []);

  // Fetch Home Data
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

  // Input Change
  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(Change_Inp_Val({ value: e.target.value, name: e.target.name }));
  };

  // Logout Function
  const handleLogout = () => {
    DeleteLsData();
    toast.success("Logged Out Successfully");
    navigate("/login");
  };

  // Update Function
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    const userData = {
      name,
      email,
      profession,
      phone,
      password,
    };
    dispatch(Is_Loading());
    try {
      const registerRes = await axios.post(
        `${API_URL}/auth/register`,
        userData
      );
      dispatch(Register_Success());
      toast.success(registerRes?.data?.msg);
      navigate("/login");
      // console.log("Register Response :", registerRes?.data);
    } catch (error: any) {
      dispatch(Is_Error({ errorMsg: "" }));
      toast.error(error?.response?.data?.msg || "Something Went Wrong");
      console.log("Register Error :", error);
    }
  };

  return (
    <div className={css.Outer}>
      {userName && (
        <div className={css.navOuter}>
          <div>
            {userName && <p>Hi {userName},</p>}
            <div onClick={() => setShowUpdate((prev) => !prev)}>⛏️</div>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {showUpdate && (
        <form onSubmit={handleUpdate} className={css.formOuter}>
          <input
            value={name}
            onChange={handleInpChange}
            name="name"
            placeholder="Name"
            type="text"
            required
          />
          <input
            value={email}
            onChange={handleInpChange}
            name="email"
            placeholder="Email"
            type="email"
            required
          />
          <input
            value={profession}
            onChange={handleInpChange}
            name="profession"
            placeholder="Profession"
            type="text"
            required
          />
          <input
            value={phone}
            onChange={handleInpChange}
            name="phone"
            placeholder="Phone"
            type="number"
            required
          />
          <button type="submit">{isLoading ? "Updating" : "Update"}</button>
        </form>
      )}
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
