import React from 'react';
import { Container, Col, Row, Card, CardGroup} from 'react-bootstrap';


function Home() {
  return (
    <div className="Home">
      <div>
      {/* Use the Jumbotron component with a background image to create a parallax effect */}
      <div className="bg-dark text-light" style={{ backgroundImage: 'url(http://example.com/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div>
          <h1>Welcome to the Bookstore!</h1>
          <p>We have a wide selection of books in all genres, including fiction, non-fiction, and children's books.</p>
          <p>Browse our featured books or use the search bar to find your next favorite read.</p>
        </div>
      </div>
      </div>
      <main>
            <h2>Featured Books</h2>
            <Container>
              <CardGroup>
                <Row>
                  <Col xs={12} md={4}>
                    <Card
                      imageUrl="http://example.com/book1.jpg"
                      title="Book 1"
                      author="Author 1"
                      price={19.99}
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Card
                      imageUrl="http://example.com/book2.jpg"
                      title="Book 2"
                      author="Author 2"
                      price={24.99}
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Card
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
    </div>
    
  );
}

export default Home;

