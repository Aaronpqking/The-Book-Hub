import React from 'react';
import { useState, useEffect, useHref } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Import ApolloProvider hook and ApolloClient
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import {
  Container,
  CardColumns,
  CardGroup,
  Card,
  Row,
  Col
} from 'react-bootstrap';
import '../src/app.css'
import Home from './components/Home';
import AppNavbar from './components/Nav';
import Footer from './components/Footer';
import BookCard from './components/BookCard';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import ConfirmationModal from './components/ConfirmationModal';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});


const MyComponent = () => {
  const href = useHref('/new-route');

  return (
    <a href={href}>Click here to go to a new route</a>
  );
};

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <AppNavbar />
        <Home />
        <main>
          <h2>Featured Books</h2>
          <Container>
            <CardGroup>
              <Row>
                <Col xs={12} md={4}>
                  <BookCard
                    imageUrl="http://example.com/book1.jpg"
                    title="Book 1"
                    author="Author 1"
                    price={19.99}
                  />
                </Col>
                <Col xs={12} md={4}>
                  <BookCard
                    imageUrl="http://example.com/book2.jpg"
                    title="Book 2"
                    author="Author 2"
                    price={24.99}
                  />
                </Col>
                <Col xs={12} md={4}>
                  <BookCard
                    imageUrl="http://example.com/book3.jpg"
                    title="Book 3"
                    author="Author 3"
                    price={29.99}
                  />
                </Col>
              </Row>
            </CardGroup>
          </Container>
        </main>
        <Cart />
        {/* <CheckoutForm /> */}
        {/* <OrderSummary /> */}
        {/* <ConfirmationModal /> */}
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
