import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetails } from "../../store/slices/BooksSlice";
import { TailSpin } from "react-loader-spinner";

function BookDetails() {
  let { bookId } = useParams();
  const dispatch = useDispatch();

  const { singleBook, singleBooksLoading } = useSelector(
    ({ booksState }) => booksState
  );

  useEffect(() => {
    dispatch(getBookDetails(bookId));
  }, [bookId]);

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }
  return (
    <>
      {!singleBooksLoading ? (
        <div className="details">
          <div className="image-container">
            <img src={singleBook?.image} alt={singleBook?.name} />
          </div>

          <div className="book-data">
            <div className="title-container">
              <h1>{singleBook?.name}</h1>
            </div>

            <div className="body-details">
              <div className="general-info">
                <p className="author-details">{singleBook?.author}</p>
                <p>
                  Genre:{" "}
                  <span className="span-details">
                    {singleBook?.genre?.name}
                  </span>
                </p>

                <p>
                  Created on:{" "}
                  <span className="span-details">
                    {formatDate(singleBook?.createOn)}
                  </span>
                </p>
                <p>
                  Updated on:{" "}
                  <span className="span-details">
                    {formatDate(singleBook?.lastUpdateOn)}
                  </span>
                </p>
              </div>
              <div className="description">
                <h3>Short description</h3>
                <p>
                  Harry Potter and the Goblet of Fire is a fantasy novel written
                  by British author J. K. Rowling and the fourth novel in the
                  Harry Potter series. It follows Harry Potter, a wizard in his
                  fourth year at Hogwarts School of Witchcraft and Wizardry, and
                  the mystery surrounding the entry of Harry’s name into the
                  Triwizard Tournament, in which he is forced to compete.
                </p>
                <p>
                  The book was published in the United Kingdom by Bloomsbury and
                  in the United States by Scholastic. In both countries, the
                  release date was 8 July 2000. This was the first time a book
                  in the series was published in both countries at the same
                  time. The novel won a Hugo Award, the only Harry Potter novel
                  to do so, in 2001. The book was adapted into a film, released
                  worldwide on 18 November 2005, and a video game by Electronic
                  Arts.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
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
    </>
  );
}

export default BookDetails;
