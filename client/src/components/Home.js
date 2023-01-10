import React from "react";
import { Container, Col, Row, Card, CardGroup } from "react-bootstrap";
import "../Style/home.css";

function Home() {
  return (
    <div className="Home">
      <div className="jumbotron jumbotron-fluid bg-dark text-light" style={{ backgroundImage: "url(http://example.com/image.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h1 className="display-4">Welcome to the Bookstore!</h1>
          <p className="lead">
            We have a wide selection of books in all genres, including fiction, non-fiction, and children's books. Browse our featured books or use the search bar to find your next favorite read.
          </p>
        </div>
      </div>
      <main>
        <h2 className="text-center mt-5 mb-3">Featured Books</h2>
        <Container>
          <CardGroup>
            <Row>
              <Col xs={12} md={4}>
                <Card
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsavbB1JB41qvpgD9oAiaXitJu69oinUy_JolRsSZKpMuihryK"
                  title="The Catcher in the Rye"
                  author="J. D. Salinger "
                  price={19.99}
                />
              </Col>
              <Col xs={12} md={4}>
                <Card
                  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfC0X4R_qjoKwMTtEF_-yC5MkiicSEHEHn86Ed87DYPhCJXsqZ"
                  title="The Giver"
                  author="Lois Lowry"
                  price={24.99}
                />
              </Col>
              <Col xs={12} md={4}>
                <Card
                  imageUrl="https://i.pinimg.com/originals/c8/7b/0f/c87b0f154ab3b6bf4ef875b97ba392e7.jpg"
                  title="Romeo and Juliet"
                  author="William Shakespeare"
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
