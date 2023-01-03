import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="Home">
      <div>
      {/* Use the Jumbotron component with a background image to create a parallax effect */}
      {/* <div className="bg-dark text-light" style={{ backgroundImage: 'url(http://example.com/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
        <div>
          <h1>Welcome to the Bookstore!</h1>
          <p>We have a wide selection of books in all genres, including fiction, non-fiction, and children's books.</p>
          <p>Browse our featured books or use the search bar to find your next favorite read.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

