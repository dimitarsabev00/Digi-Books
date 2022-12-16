import "./HomePage.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function HomePage() {
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
        <div id="book-grid">Books Cards</div>
      </div>
    </div>
  );
}

export default HomePage;
