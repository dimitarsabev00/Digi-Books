import "./HomePage.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useEffect, useState } from "react";
import { getAllBooks, searchBooks } from "../../store/slices/BooksSlice";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import { TailSpin } from "react-loader-spinner";
function HomePage() {
  const [pattern, setPattern] = useState("");
  const [searchLabel, setSearchLabel] = useState("All BOOKS");
  const dispatch = useDispatch();
  const { booksList, booksIsLoading } = useSelector(
    ({ booksState }) => booksState
  );

  //Feath All Books
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    if (pattern) {
      dispatch(searchBooks(pattern));
    } else {
      dispatch(getAllBooks());
    }
  }, [pattern]);
  return (
    <div className="outlet-container">
      <div className="content-container">
        <div id="search-form">
          <label htmlFor="search">{searchLabel}</label>
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search"
              value={pattern}
              onChange={(ev) => setPattern(ev.target.value)}
            />
            <SearchIcon id="search-icon" />
          </div>
        </div>
        {!booksIsLoading ? (
          <div id="book-grid">
            {booksList?.map((book) => (
              <BookCard key={book._id} {...book} />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TailSpin
              height="80"
              width="80"
              color="#08c642"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
