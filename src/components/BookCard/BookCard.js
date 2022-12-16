import React from "react";
import "./BookCard.scss";
import { IoPlay } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function BookCard({ name, author, createOn, genre, image, lastUpdateOn, _id }) {
  const navigate = useNavigate();

  function handleNavigationToDeatails() {
    const url = `/details/${_id}`;
    navigate(url, { state: _id });
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  return (
    <div className="book-card">
      <img src={image} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <p className="author">{author}</p>
        <p>
          Genre: <span className="span-info">{genre.name}</span>
        </p>
        <div className="dates">
          <p>
            Created on:{" "}
            <span className="span-info">{formatDate(createOn)}</span>
          </p>
          <p>
            Updated on:{" "}
            <span className="span-info">{formatDate(lastUpdateOn)}</span>
          </p>
        </div>
      </div>

      <button onClick={handleNavigationToDeatails}>
        <IoPlay className="play-icon" />
      </button>
    </div>
  );
}

export default BookCard;
