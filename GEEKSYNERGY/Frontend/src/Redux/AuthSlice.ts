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

  // Home Data
  isDataLoading: false,
  isDataError: false,
  userDataHomepage: [],
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
    Login_Success: (state) => {
      state.isLoading = false;
    },

    // Home Actions
    Is_Loading_Home_Data: (state) => {
      state.isDataLoading = true;
      state.isDataError = false;
    },
    Is_Error_Home_Data: (state) => {
      state.isDataLoading = false;
      state.isDataError = true;
    },
    Home_Data_Success: (state, action: PayloadAction<any>) => {
      state.isDataLoading = false;
      state.userDataHomepage = action.payload.data;
    },
  },
});

export const {
  Change_Inp_Val,
  Is_Loading,
  Is_Error,
  Register_Success,
  Login_Success,
  Is_Loading_Home_Data,
  Is_Error_Home_Data,
  Home_Data_Success,
} = authSlice.actions;

export default authSlice.reducer;
