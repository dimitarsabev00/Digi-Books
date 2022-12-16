import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosHelper from "../../api/axiosHelper";

const localStorageToken = localStorage.getItem("token") ?? "";

const initialState = {
  isAuthenticated: Boolean(localStorageToken),
  token: localStorageToken,
  loginIsLoading: false,
  registerIsLoading: false,
};

export const AuthSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    loginRequesting: (state) => {
      state.loginIsLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      const token = payload;
      localStorage.setItem("token", token);
      state.isAuthenticated = true;
      state.loginIsLoading = false;
      toast.success("You have been logged in successfully!");
    },
    loginError: (state) => {
      state.loginIsLoading = false;
    },
    registerRequesting: (state) => {
      state.registerIsLoading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.registerIsLoading = false;

      const successMessage = payload?.data?.message;

      if (successMessage) {
        toast.success(successMessage);
      }
    },
    registerError: (state) => {
      state.registerIsLoading = false;
    },
    logoutSuccess: (state, { payload }) => {
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");

      const successMessage = payload?.data?.message;

      if (successMessage) {
        toast.success(successMessage);
      }
    },
  },
});

export const {
  loginRequesting,
  loginSuccess,
  loginError,
  registerRequesting,
  registerSuccess,
  registerError,
  logoutSuccess,
} = AuthSlice.actions;

export const signIn = (data, navigate) => async (dispatch) => {
  dispatch(loginRequesting());
  axiosHelper.post("/user/login", data).then(
    (response) => {
      dispatch(loginSuccess(response.data.token));
      if (navigate) {
        navigate("/");
      }
    },

    (error) => dispatch(loginError(error))
  );
};

export const signUp = (data, navigate) => async (dispatch) => {
  dispatch(registerRequesting());
  axiosHelper.post("/user/register", data).then(
    (response) => {
      dispatch(registerSuccess(response.data.token));
      if (navigate) {
        navigate("/login");
      }
    },
    (error) => dispatch(registerError(error))
  );
};

export const logout = () => async (dispatch) => {
  axiosHelper
    .post("/user/logout")
    .then((response) => dispatch(logoutSuccess(response.data.token)));
};

export default AuthSlice.reducer;
