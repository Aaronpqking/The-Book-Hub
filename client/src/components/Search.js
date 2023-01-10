
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

// import React, { useState, useEffect } from 'react';
// import {
//   Jumbotron,
//   Container,
//   Col,
//   Form,
//   Button,
// } from 'react-bootstrap';
// import { getSavedBookIds } from '../utils/localStorage';
// import { MongoClient } from 'mongodb';

// const url = 'mongodb://localhost:27017';
// const dbName = 'the-book-hub';

// const Search = () => {
//   // create state for holding returned database data
//   const [searchedBooks, setSearchedBooks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');
//   // create state to hold saved bookId values
//   const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

//   // Connect to the database
//   useEffect(() => {
//     async function connectToDb() {
//       const client = new MongoClient(url, { useNewUrlParser: true });
//       try {
//         await client.connect();
//         console.log('Connected to the database');
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     connectToDb();
//   }, []);

//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!searchInput) {
//       return false;
//     }
//     try {
//       // Connect to the database
//       const client = new MongoClient(url, { useNewUrlParser: true });
//       await client.connect();
//       console.log('Connected to the database');
//       const db = client.db(dbName);
//       const books = db.collection('books');
//       // Search the database
//       const searchedBooksArr = await books.find({
//         $text: { $search: searchInput },
//       }).toArray();
//       setSearchedBooks(searchedBooksArr);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Jumbotron fluid className="text-light bg-dark">
//         <Container>
//           <h1>Search for Books!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name="searchInput"
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type="text"
//                   size="lg"
//                   placeholder="Search for a book"
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type="submit" variant="success" size="lg">
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>
//     </>
//   );
// };
// export default Search;
// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';

// import { SEARCH_QUERY } from '../utils/queries';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const { data, loading, error } = useQuery(SEARCH_QUERY, {
//     variables: { searchTerm: this.state.searchTerm },
//   });

//   const handleChange = (event) => {
//       this.setState({ searchTerm: event.target.value });
//   };

//   if (loading) return <p>Searching...</p>;
//     if (error) return <p>Error: Try Again</p>;
//     console.log(error);

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//       />
//       {data.search && data.search.length > 0 ? (
//         <ul>
//           {data.search.map((item) => (
//             <li key={item._id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results</p>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';

// import { SEARCH_QUERY } from '../utils/queries';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     setLoading(true);
//     setError(null);

//     useQuery(SEARCH_QUERY, {
//       variables: { searchTerm },
//       onCompleted: (data) => {
//         setResults(data.search);
//         setLoading(false);
//       },
//       onError: (error) => {
//         setError(error);
//         setLoading(false);
//       },
//     });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//       />
//       <button onClick={handleSearch}>Search</button>
//       {loading && <p>Searching...</p>}
//       {error && <p>Error: Try Again</p>}
//       {results.length > 0 ? (
//         <ul>
//           {results.map((item) => (
//             <li key={item._id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results</p>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { SEARCH_QUERY } from '../utils/queries';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [executeSearch, { data, loading: searchLoading, error: searchError }] =
    useLazyQuery(SEARCH_QUERY);

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);

  const handleChange = (event) => {

    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('HP');
    console.log(searchTerm)
    setLoading(true);
    setError(null);

    executeSearch({ variables: { searchTerm } });
  };

  useEffect(() => {
    console.log('Search Use Effect')
    if (data) {
      console.log(data);
      setResults(data.search);
      console.log(data.search);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (searchError) {
      setError(searchError);
      setLoading(false);
    }
  }, [searchError])

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>

      <p>No results</p>
    </div>
  );
};
export default SearchBar;
// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';

// import { SEARCH_QUERY } from '../utils/queries';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const { data, loading, error } = useQuery(SEARCH_QUERY, {
//     variables: { searchTerm },
//   });

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     setSearchTerm(searchTerm);
//   };

//   if (loading) return <p>Searching...</p>;
//   if (error) return <p>Error: Try Again</p>;
//   console.log(error);

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="Search..."
//       />
//       <button onClick={handleSearch}>Search</button>
//       {searchTerm !== '' && data.search && data.search.length > 0 ? (
//         <ul>
//           {data.search.map((item) => (
//             <li key={item._id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results</p>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
