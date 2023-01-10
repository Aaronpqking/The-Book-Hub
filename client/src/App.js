import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from '@apollo/client';
import AppNavbar from './components/Nav';
import Home from './components/Home';
import SearchBar from './components/Search';
import SearchResultsPage from './components/SearchResultsPage';
import SignupForm from './components/SignupForm';
import Login from './components/LoginForm';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import Footer from './components/Footer';

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
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchBar setSearchTerm={setSearchTerm} />} />
            <Route path="/search-results" element={<SearchResultsPage searchTerm={searchTerm} />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-form" element={<CheckoutForm />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ApolloProvider>
  );
}
export default App;
