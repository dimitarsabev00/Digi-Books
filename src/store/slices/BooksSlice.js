import { createSlice } from "@reduxjs/toolkit";
import axiosHelper from "../../api/axiosHelper";

const initialState = {
  booksList: [],
  booksIsLoading: false,
  singleBooksLoading: false,
  singleBook: {},
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

    getSingleBookRequesting: (state) => {
      state.singleBooksLoading = true;
    },
    getSingleBookSuccess: (state, { payload }) => {
      state.singleBook = payload?.data;
      state.singleBooksLoading = false;
    },
    getSingleBookError: (state) => {
      state.singleBooksLoading = false;
    },
  },
});

export const {
  getBooksRequesting,
  getBooksSuccess,
  getBooksError,
  getSingleBookRequesting,
  getSingleBookSuccess,
  getSingleBookError,
} = BooksSlice.actions;

export const getAllBooks = () => async (dispatch) => {
  dispatch(getBooksRequesting());
  axiosHelper.get("/book").then(
    (response) => dispatch(getBooksSuccess(response)),
    (error) => dispatch(getBooksError(error))
  );
};

export const getBookDetails = (id) => async (dispatch) => {
  dispatch(getSingleBookRequesting());
  axiosHelper.get(`/book/${id}`).then(
    (response) => dispatch(getSingleBookSuccess(response)),
    (error) => dispatch(getSingleBookError(error))
  );
};
export default BooksSlice.reducer;
