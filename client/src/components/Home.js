import React from "react";
import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";
import "../Style/home.css";
function Home() {
  return (
    <div className="Home">
      <main>
        <h2 className="text-center mt-5 mb-3">Featured Books</h2>
        <br></br>
        <br></br>
        <div>
        <Row className="justify-content-around">
          <Col xs={12} md={4}  className="mx-auto">
            <BookCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsavbB1JB41qvpgD9oAiaXitJu69oinUy_JolRsSZKpMuihryK"
              title="The Catcher in the Rye"
              author="J. D. Salinger "
              price={19.99}
            />
          </Col>
          <Col xs={12} md={4} className="mx-auto">
            <BookCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfC0X4R_qjoKwMTtEF_-yC5MkiicSEHEHn86Ed87DYPhCJXsqZ"
              title="The Giver"
              author="Lois Lowry"
              price={24.99}
            />
          </Col>
          <Col xs={12} md={4}  className="mx-auto">
            <BookCard
               imageUrl="https://i.pinimg.com/originals/c8/7b/0f/c87b0f154ab3b6bf4ef875b97ba392e7.jpg"
               title="Romeo and Juliet"
               author="William Shakespeare"
               price={29.99}
             />
           </Col>
          </Row>
          </div>
       </main>
    </div>
   );
 }
 
 export default Home;
             
