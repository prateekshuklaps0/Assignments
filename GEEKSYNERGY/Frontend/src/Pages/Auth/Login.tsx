import css from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import {
  Change_Inp_Val,
  Is_Error,
  Is_Loading,
  Login_Success,
} from "../../Redux/AuthSlice";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { SetLsData } from "../../Redux/Action";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const email = useAppSelector((state) => state.auth.email);
  const password = useAppSelector((state) => state.auth.password);
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  // Input Change
  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(Change_Inp_Val({ value: e.target.value, name: e.target.name }));
  };

  // Form Submit
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    const userData = {
      email,
      password,
    };
    dispatch(Is_Loading());
    try {
      const loginRes = await axios.post(`${API_URL}/auth/login`, userData);
      SetLsData(loginRes?.data?.userData || {});
      toast.success(loginRes?.data?.msg);
      dispatch(Login_Success());
      navigate("/");
      // console.log("Login Response :", loginRes?.data);
    } catch (error: any) {
      console.log("Login Error :", error);
      toast.error(error?.response?.data?.msg || "Something Went Wrong");
      dispatch(Is_Error({ errorMsg: "" }));
    }
  };

  return (
    <div className={css.Outer}>
      <h2>Register</h2>
      <form onSubmit={handleLogin} className={css.formOuter}>
        <input
          value={email}
          onChange={handleInpChange}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <input
          value={password}
          onChange={handleInpChange}
          name="password"
          placeholder="Password"
          type="text"
          required
        />
        <button type="submit">{isLoading ? "Loading" : "Login"} </button>
      </form>
      <Link to="/register">New User? Register</Link>
    </div>
  );
};

export default Login;
