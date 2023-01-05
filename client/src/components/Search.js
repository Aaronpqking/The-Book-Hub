import React, { useState, useEffect } from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from 'react-bootstrap';
import Auth from '../utils/auth';
// import { searchFeaturedBooks } from '../../../server/seeders/books.js';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_BOOK } from '../utils/mutations';
//import { gql } from 'apollo-server-express';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'the-book-hub';

        const Search = () => {
          // create state for holding returned database data
          const [searchedBooks, setSearchedBooks] = useState([]);
          // create state for holding our search field data
          const [searchInput, setSearchInput] = useState('');
          // create state to hold saved bookId values
          const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
        
          // Connect to the database
          useEffect(() => {
            async function connectToDb() {
              const client = new MongoClient(url, { useNewUrlParser: true });
              try {
                await client.connect();
                console.log('Connected to the database');
              } catch (error) {
                console.log(error);
              }
            }
            connectToDb();
          }, []);
        
          // create method to search for books and set state on form submit
          const handleFormSubmit = async (event) => {
            event.preventDefault();
            if (!searchInput) {
              return false;
            }
            try {
              // Connect to the database
              const client = new MongoClient(url, { useNewUrlParser: true });
              await client.connect();
              console.log('Connected to the database');
              const db = client.db(dbName);
              const books = db.collection('books');
              // Search the database
              const searchedBooksArr = await books.find({ $text: { $search: searchInput } }).toArray();
              setSearchedBooks(searchedBooksArr);
            } catch (error) {
              console.log(error);
            }
            
          }



// create method to save book and update savedBookIds in local storage
const [saveBook] = useMutation(SAVE_BOOK);
const handleSaveBook = async (bookId) => {
// check if the book is already saved
if (savedBookIds.includes(bookId)) {
return false;
}
// save the book to the database
try {
const { data } = await saveBook({ variables: { bookId } });
if (data) {
// update savedBookIds in local storage
saveBookIds(bookId);
setSavedBookIds([...savedBookIds, bookId]);
}
} catch (error) {
console.log(error);
}
};
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a book"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
      {/* <Container>
        <h2>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <CardColumns>
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )
                        ? 'This book has been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container> */}
    </>
  );
};
export default Search;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useLazyQuery } from '@apollo/react-hooks';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { SEARCH_QUERY, ADD_BOOK_MUTATION } from '../utils/queries';
// import { SAVE_BOOK } from '../utils/mutations';

// const Search = () => {
//   const { data, loading, error } = useQuery(SEARCH_QUERY, {
//     variables: {
//       query: searchInput
//     }
//   });

// }

//   const [addBook, { data: addBookData }] = useMutation(ADD_BOOK_MUTATION);

//   // handle form submission and execute addBook mutation
//   const handleAddBookSubmit = event => {
//     event.preventDefault();
//     addBook({ variables: { title: 'New Book', author: 'John Doe', price: 19.99 } });
//   }

//   // callback function to handle search input change
//   const handleSearchInputChange = event => {
//     setSearchInput(event.target.value);
//   }

//   // callback function to handle search form submission
// const handleSearchSubmit = event => {
//   event.preventDefault();
//   // execute search query
//   executeSearch();
// };

//   // effect hook to handle search query response
//   useEffect(() => {
//     if (called && !loading && !error) {
//       // update search results state with search query response data
//       setSearchResults(data.search);
//     }
//   }, [called, loading, error, data]);

//   return (
//     <div>
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleSearchInputChange}
//           placeholder="Search"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {/* Display search results */}
//       {searchResults.map(result => (
//         <div key={result.id}>
//           <Link to={`/${result.id}`}>{result.title}</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Search;
