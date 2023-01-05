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
// // import { searchFeaturedBooks } from '../../../server/seeders/books.js';
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
//       // const response = await searchFeaturedBooks(searchInput);
//       // if (!response.ok) {
//       //   throw new Error('something went wrong!');
//       // }
//       // const { items } = await response.json();
//       // const bookData = items.map((book) => ({
//       //   bookId: book.id,
//       //   authors: book.volumeInfo.authors || ['No author to display'],
//       //   title: book.volumeInfo.title,
//       //   description: book.volumeInfo.description,
//       //   image: book.volumeInfo.imageLinks?.thumbnail || '',
//       // }));
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
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_QUERY } from '../utils/queries';

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
