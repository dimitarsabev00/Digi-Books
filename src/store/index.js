import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    authState: AuthReducer,
  },
});
