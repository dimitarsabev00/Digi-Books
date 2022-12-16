import "./HomePage.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useEffect } from "react";
import { getAllBooks } from "../../store/slices/BooksSlice";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
function HomePage() {
  const dispatch = useDispatch();
  const { booksList, booksIsLoading } = useSelector(
    ({ booksState }) => booksState
  );

  //Feath All Books
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <div className="outlet-container">
      <div className="content-container">
        <div id="search-form">
          <label htmlFor="search">ALL BOOKS</label>
          <div>
            <input type="text" id="search" placeholder="Search" />
            <SearchIcon id="search-icon" />
          </div>
        </div>
        <div id="book-grid">
          {booksList.map((book) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
