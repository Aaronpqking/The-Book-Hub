// import React from 'react';
// import { useState, useEffect, useHref } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// //Import ApolloProvider hook and ApolloClient
// import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
// import { GET_BOOKS, ADD_BOOK } from './utils/queries';
// import {
//   Container,
//   CardColumns,
//   CardGroup,
//   Card,
//   Row,
//   Col
// } from 'react-bootstrap';
// import '../src/app.css'
// import Home from './components/Home';
// import AppNavbar from './components/Nav';
// import Footer from './components/Footer';
// import BookCard from './components/BookCard';
// import Cart from './components/Cart';
// import CheckoutForm from './components/CheckoutForm';
// import OrderSummary from './components/OrderSummary';
// import ConfirmationModal from './components/ConfirmationModal';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import cart from './components/SignupForm';

// const BooksList = () => {
//   const { loading, error, data } =
//     useQuery(GET_BOOKS);
//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   return (
//     <ul>
//       {data.books.map(book => (
//         <li key={book.id}>
//           {book.title} by {book.author}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const AddBookForm = () => {
//   const [addBook, { data }] = useMutation(ADD_BOOK);

//   return (
//     <form
//       onSubmit={e => {
//         e.preventDefault();
//         addBook({ variables: { title: 'New Book', author: 'John Doe', price: 19.99 } });
//       }}
//     >
//       <button type="submit">Add Book</button>
//     </form>
//   );
// };

// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql'
// });


// // const MyComponent = () => {
// //   const href = useHref('/new-route');

// //   return (
// //     <a href={href}>Click here to go to a new route</a>
// //   );
// // };

// function App() {
//   return (
//     <ApolloProvider client={client}>
//     <Router>
//       <div className="App">
//         <AppNavbar />
//         <Home />
//         <main>
//           <h2>Featured Books</h2>
//           <Container>
//             <CardGroup>
//               <Row>
//                 <Col xs={12} md={4}>
//                   <BookCard
//                     imageUrl="http://example.com/book1.jpg"
//                     title="Book 1"
//                     author="Author 1"
//                     price={19.99}
//                   />
//                 </Col>
//                 <Col xs={12} md={4}>
//                   <BookCard
//                     imageUrl="http://example.com/book2.jpg"
//                     title="Book 2"
//                     author="Author 2"
//                     price={24.99}
//                   />
//                 </Col>
//                 <Col xs={12} md={4}>
//                   <BookCard
//                     imageUrl="http://example.com/book3.jpg"
//                     title="Book 3"
//                     author="Author 3"
//                     price={29.99}
//                   />
//                 </Col>
//               </Row>
//             </CardGroup>
//           </Container>
//         </main>
//         <Cart />
//         {/* <CheckoutForm /> */}
//         {/* <OrderSummary /> */}
//         {/* <ConfirmationModal /> */}
//         <Footer />
//       </div>
//       </Router>
      
//       <Router>
//       <Route exact path="/cart" pages={cart} />

//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Import ApolloProvider hook and ApolloClient
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from '@apollo/client';
// import { Navbar } from 'react-bootstrap';
import AppNavbar from './components/Nav';
import Home from './components/Home';
import Search from './components/Search';
import SignupForm from './components/SignupForm';
import Login from './components/LoginForm';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import Footer from './components/Footer';
// Establish apollo client

import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: 'http://localhost:3001/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <AppNavbar />
          <Routes>
        <Route   path = '/' element={<Home />} />
        <Route   path = '/search' element={<Search/>} />
        <Route   path = '/signup' element = {<SignupForm/>} />
        <Route   path = '/login' element = {<Login/>} />
        <Route   path = '/cart' element = {<Cart/>} />
        <Route   path = '/checkoutForm' element = {<CheckoutForm/>} />
        <Route   path = '/orderSummary' element = {<OrderSummary/>} />
        </Routes>
       </BrowserRouter>
        <Footer />
      </div>
    </ApolloProvider>
  );
}
export default App;