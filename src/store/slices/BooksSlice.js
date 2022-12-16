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
      state.booksList = payload;
      state.booksIsLoading = false;
    },
    getBooksError: (state) => {
      state.booksIsLoading = false;
    },

    getSingleBookRequesting: (state) => {
      state.singleBooksLoading = true;
    },
    getSingleBookSuccess: (state, { payload }) => {
      state.singleBook = payload;
      state.singleBooksLoading = false;
    },
    getSingleBookError: (state) => {
      state.singleBooksLoading = false;
    },
    searchBooksRequesting: (state) => {
      state.booksIsLoading = true;
    },
    searchBooksSuccess: (state, { payload }) => {
      state.booksList = payload;
      state.booksIsLoading = false;
    },
    searchBooksError: (state) => {
      state.booksIsLoading = false;
    },
  },
});

export const {
  getBooksRequesting,
  getBooksSuccess,
  getBooksError,
  searchBooksRequesting,
  searchBooksSuccess,
  searchBooksError,
  getSingleBookRequesting,
  getSingleBookSuccess,
  getSingleBookError,
} = BooksSlice.actions;

export const getAllBooks = () => async (dispatch) => {
  dispatch(getBooksRequesting());
  axiosHelper.get("/book").then(
    (response) => dispatch(getBooksSuccess(response.data)),
    (error) => dispatch(getBooksError(error))
  );
};

export const getBookDetails = (id) => async (dispatch) => {
  dispatch(getSingleBookRequesting());
  axiosHelper.get(`/book/${id}`).then(
    (response) => dispatch(getSingleBookSuccess(response.data)),
    (error) => dispatch(getSingleBookError(error))
  );
};

export const searchBooks = (pattern) => async (dispatch) => {
  dispatch(searchBooksRequesting());
  axiosHelper.post("/book/search", { pattern }).then(
    (response) => dispatch(searchBooksSuccess(response.data)),
    (error) => dispatch(searchBooksError(error))
  );
};

export default BooksSlice.reducer;
