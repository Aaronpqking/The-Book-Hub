import React from 'react';
import '../src/app.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookCard from './components/BookCard';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import ConfirmationModal from './components/ConfirmationModal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <main>
      <h2>Featured Books</h2>
      <BookCard
        imageUrl="http://example.com/book1.jpg"
        title="Book 1"
        author="Author 1"
        price={19.99}
      />
      <BookCard
        imageUrl="http://example.com/book2.jpg"
        title="Book 2"
        author="Author 2"
        price={24.99}
      />
      <BookCard
        imageUrl="http://example.com/book3.jpg"
        title="Book 3"
        author="Author 3"
        price={29.99}
      />
      </main>
      <Cart />
      {/* <CheckoutForm /> */}
      {/* <OrderSummary /> */}
      {/* <ConfirmationModal /> */}
      <Footer />
    </div>
  );
}

export default App;

