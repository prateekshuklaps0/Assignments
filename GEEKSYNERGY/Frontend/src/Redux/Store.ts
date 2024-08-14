import { useDispatch, useSelector } from "react-redux";
import AuthReducer from "./AuthSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { auth: AuthReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
