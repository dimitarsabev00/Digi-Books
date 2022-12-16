import { createSlice } from "@reduxjs/toolkit";
import axiosHelper from "../../api/axiosHelper";

const initialState = {
  booksList: [],
  booksIsLoading: false,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    getBooksRequesting: (state) => {
      state.booksIsLoading = true;
    },
    getBooksSuccess: (state, { payload }) => {
      state.booksList = payload?.data;
      state.booksIsLoading = false;
    },
    getBooksError: (state) => {
      state.booksIsLoading = false;
    },
  },
});

export const { getBooksRequesting, getBooksSuccess, getBooksError } =
  BooksSlice.actions;

export const getAllBooks = () => async (dispatch) => {
  dispatch(getBooksRequesting());
  axiosHelper.get("/book").then(
    (response) => dispatch(getBooksSuccess(response)),
    (error) => dispatch(getBooksError(error))
  );
};

export default BooksSlice.reducer;
