import React, { useState } from "react";
import BookList from "../components/BookList";

import Library from "../../src/img/Library.jpg";
import "./index.css";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setHasSearched(true); // Mark that a search has been attempted
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchTerm}`
      );
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container" style={{     
      backgroundImage: `url(${Library}) `,
    }}>
      <div className="heading-container">
        <h2 className="heading">Find Your Favorite Books</h2>
        <div className="search-input-suggestions-container">
          <div className="search-input-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for books by title"
              className="search-input"
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <BookList books={books} hasSearched={hasSearched} />
        )}
      </div>
    </div>
  );
}

export default Home;
