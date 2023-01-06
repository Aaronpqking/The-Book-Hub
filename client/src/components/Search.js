import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_QUERY } from '../utils/queries';
import "../Style/search.css";

const Search = () => {
  // state to hold search input value
  const [searchInput, setSearchInput] = useState('');
  // state to hold search results
  const [searchResults, setSearchResults] = useState([]);
  // state to track loading status of search query
  const [loading, setLoading] = useState(false);
  // state to track error status of search query
  const [error, setError] = useState(null);

  // useLazyQuery hook for executing search query
  const [executeSearch, { called, data }] = useLazyQuery(SEARCH_QUERY, {
    variables: {
      query: searchInput
    }
  });

  // callback function to handle search input change
  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
  }

  // callback function to handle search form submission
  const handleSearchSubmit = event => {
    event.preventDefault();
    // execute search query
    executeSearch();
  }

  // effect hook to handle search query response
  useEffect(() => {
    if (called && !loading && !error) {
      // update search results state with search query response data
      setSearchResults(data.search);
    }
  }, [called, loading, error, data]);

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
      {/* Display search results */}
      {searchResults.map(result => (
        <div key={result.id}>
          <Link to={`/${result.id}`}>{result.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Search;
