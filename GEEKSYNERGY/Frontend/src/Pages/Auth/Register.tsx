import css from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import {
  Change_Inp_Val,
  Is_Error,
  Is_Loading,
  Register_Success,
} from "../../Redux/AuthSlice";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useAppSelector((state) => state.auth.name);
  const email = useAppSelector((state) => state.auth.email);
  const profession = useAppSelector((state) => state.auth.profession);
  const phone = useAppSelector((state) => state.auth.phone);
  const password = useAppSelector((state) => state.auth.password);
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  // Input Change
  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(Change_Inp_Val({ value: e.target.value, name: e.target.name }));
  };

  // Form Submit
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <h2>Register</h2>
      <form onSubmit={handleRegister} className={css.formOuter}>
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
        <input
          value={password}
          onChange={handleInpChange}
          name="password"
          placeholder="Password"
          type="text"
          required
        />
        <button type="submit">{isLoading ? "Registering" : "Register"} </button>
      </form>
      <Link to="/login">Already Registered? Login</Link>
    </div>
  );
};

export default Register;
