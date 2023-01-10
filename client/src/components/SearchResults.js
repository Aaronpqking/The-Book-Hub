import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";

const SearchResults = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      const res = await fetch(`/api/search?q=${searchTerm}`);
      const data = await res.json();
      setSearchResults(data.books);
    }
    fetchResults();
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="grid grid-cols-3 gap-4">
        {searchResults.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
