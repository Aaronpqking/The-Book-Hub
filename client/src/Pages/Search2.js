// import React, { useState, useEffect } from 'react';
// import {
//      Jumbotron,
//      Container,
//      Col,
//      Form,
//      Button,
//      Card,
//      CardColumns } from 'react-bootstrap';
// import Auth from '../utils/auth';
// import { searchFeaturedBooks } from '../../../server/seeders/books.js';
// import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
// import { useMutation } from '@apollo/react-hooks';
// import { SAVE_BOOK } from '../utils/mutations';


// const Search = () => {
//   // create state for holding returned google api data
//   const [searchedBooks, setSearchedBooks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');
//   // create state to hold saved bookId values
//   const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
//   //create Apollo mutation Hook
//   const [saveBook, { error }] = useMutation(SAVE_BOOK);
//   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   useEffect(() => {
//     return () => saveBookIds(savedBookIds);
//   });
//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!searchInput) {
//       return false;
//     }
//     try {
//       const response = await searchFeaturedBooks(searchInput);
//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }
//       const { items } = await response.json();
//       const bookData = items.map((book) => ({
//         bookId: book.id,
//         authors: book.volumeInfo.authors || ['No author to display'],
//         title: book.volumeInfo.title,
//         description: book.volumeInfo.description,
//         image: book.volumeInfo.imageLinks?.thumbnail || '',
//       }));
//       setSearchedBooks('');
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   // create function to handle saving a book to our database
//   const handleSaveBook = async (bookId) => {
//     // find the book in `searchedBooks` state by the matching id
//     const bookInput = searchedBooks.find((book) => book.bookId === bookId);
//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;
//     if (!token) {
//       return false;
//     }
//     try {
//       const { data } = await saveBook({
//         variables: { input: bookInput }
//       });
//       if (error) {
//         throw new Error('something went wrong!');
//       }
//       // if book successfully saves to user's account, save book id to state
//       setSavedBookIds([...savedBookIds, bookInput.bookId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Search for Books!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for a book'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {searchedBooks.length
//             ? `Viewing ${searchedBooks.length} results:`
//             : 'Search for a book to begin'}
//         </h2>
//         <CardColumns>
//           {searchedBooks.map((book) => {
//             return (
//               <Card key={book.bookId} border='dark'>
//                 {book.image ? (
//                   <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className='small'>Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveBook(book.bookId)}>
//                       {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
//                         ? 'This book has been saved!'
//                         : 'Save this Book!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };
// export default Search;

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
    setLoading(true);
    setError(null);

    executeSearch({ variables: { searchTerm } })
      .then(({data}) => {
        setResults(data.search);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
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
  }, [searchError]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
{!loading && !error && !results.length && <p>No results</p>}
{error && <p>Error: {error.message}</p>}
{results.length > 0 && 
  <ul>
    {results.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
}

     
    </div>
  );
};
// export default SearchBar;
