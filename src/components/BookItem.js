import React from "react";
import "./index.css";
function BookItem({ book }) {
  return (
    <div className="book-item">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="book-cover"
        />
      ) : (
        <div className="no-cover">No Image</div>
      )}
      <h3>{book.title}</h3>
      <p>Author: {book.author_name?.join(", ") || "N/A"}</p>
      <p>Published: {book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookItem;
