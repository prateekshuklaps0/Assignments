import css from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Store";
import {
  Change_Inp_Val,
  Is_Error,
  Is_Loading,
  Register_Success,
} from "../../Redux/AuthSlice";

const API_URL = "http://localhost:8080";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.name);
  const email = useAppSelector((state) => state.auth.email);
  const profession = useAppSelector((state) => state.auth.profession);
  const phone = useAppSelector((state) => state.auth.phone);
  const password = useAppSelector((state) => state.auth.password);
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const isError = useAppSelector((state) => state.auth.isError);
  const errorMsg = useAppSelector((state) => state.auth.errorMsg);

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
      const resisterRes = await axios.get(`${API_URL}/`);
      // const resisterRes = await axios.post(
      //   `${API_URL}/auth/register`,
      //   userData
      // );
      console.log("resisterRes :", resisterRes?.data);
      dispatch(Register_Success());
    } catch (error) {
      dispatch(Is_Error({ errorMsg: "Something Went Wrong" }));
      toast.error("Something Went Wrong");
      console.log("Register Error :", error);
    }
  };

  return (
    <div className={css.Outer}>
      <form onSubmit={handleRegister}>
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
    </div>
  );
};

export default Register;
