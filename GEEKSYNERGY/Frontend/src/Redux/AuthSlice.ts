import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  // Form states
  name: "tester1",
  email: "tester1@g.com",
  password: "tester123",
  phone: "987655433214",
  profession: "tester 1",

  // request states
  isLoading: false,
  isError: false,
  errorMsg: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Change_Inp_Val: (state, action: PayloadAction<any>) => {
      state[action.payload.name] = action.payload.value;
    },
    Is_Loading: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    },
    Is_Error: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload.errorMsg;
    },
    Register_Success: (state) => {
      state.isLoading = false;
    },
  },
});

export const { Change_Inp_Val, Is_Loading, Is_Error, Register_Success } =
  authSlice.actions;

export default authSlice.reducer;
