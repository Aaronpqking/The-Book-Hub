import React, { useState, useEffect } from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import { getSavedBookIds } from '../utils/localStorage';
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
      const searchedBooksArr = await books.find({
        $text: { $search: searchInput },
      }).toArray();
      setSearchedBooks(searchedBooksArr);
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
    </>
  );
};
export default Search;
