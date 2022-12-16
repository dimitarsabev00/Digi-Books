import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";
import BooksReducer from "./slices/BooksSlice";

export const store = configureStore({
  reducer: {
    authState: AuthReducer,
    booksState: BooksReducer,
  },
});
