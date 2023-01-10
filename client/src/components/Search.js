import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { SEARCH_QUERY } from '../utils/queries';
import SearchResultsPage from './SearchResultsPage';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [executeSearch, { data }] = useLazyQuery(SEARCH_QUERY);
  
  // added as a refactor
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setHasSearched(true);
    console.log('Searching for:', searchTerm);
    try {
      const { data } = await executeSearch({ variables: { searchTerm } });
      console.log('Received data:', data);
      if (data && data.search) {
        setResults(data.search);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.log('Error:', error);
      setError(error);
    }
    setLoading(false);
  };
   
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      console.log("Results: ", results)
      {/* <input onChange={event => setSearchTerm(event.target.value)} */}
      
      {hasSearched && !loading && !error && !results.length && <p>No results</p>}
      {results.length > 0 && (
        <ul>
          {results.map((item, index) => (
  <li key={item.id || index}>{item.title}</li>
))}

        </ul>
      )}
    </div>
  );
};
export default SearchBar;


