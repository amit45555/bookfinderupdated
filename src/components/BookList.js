import React from "react";
import BookItem from "./BookItem";
import "./index.css";

function BookList({ books, hasSearched }) {
  return (
    <div className="book-list">
      {hasSearched && books.length === 0 ? (
        <p className="no-book">No books found. Try a different search.</p>
      ) : (
        books.map((book) => <BookItem key={book.key} book={book} />)
      )}
    </div>
  );
}

export default BookList;
