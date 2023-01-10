// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import Navbar from 'react-bootstrap/Navbar';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Modal, Button, Form, Tab } from 'react-bootstrap';
//  import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
// import "../Style/nav.css";

// import Auth from '../utils/auth';

// const AppNavbar = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container fluid>
//           <Navbar.Brand as={Link} to='/'>
//             Welcome!
//           </Navbar.Brand>
//              <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//           <Navbar.Toggle aria-controls='navbar' />
//           <Navbar.Collapse id='navbar'>
//             <Nav className='ml-auto'>
//               <Nav.Link as={Link} to='/'>
//                 Search For Books
//               </Nav.Link>
              
//               {/* if user is logged in show saved books and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to='/saved'>
//                     See Your Books
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* set modal data up */}
//       <Modal
//         size='lg'
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         aria-labelledby='signup-modal'>
//         {/* tab container to do either signup or login component */}
//         <Tab.Container defaultActiveKey='login'>
//           <Modal.Header closeButton>
//             <Modal.Title id='signup-modal'>
//               <Nav variant='pills'>
//                 <Nav.Item>
//                   <Nav.Link eventKey='login'>Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey='login'>
//                 <LoginForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//               <Tab.Pane eventKey='signup'>
//                 <SignUpForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//     </>
//   );
// };

// export default AppNavbar;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/nav.css";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between">
      <Navbar.Brand as={Link} to="/">
        Book Store
      </Navbar.Brand>
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
      </Nav>
    </Navbar>
  );
};

// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/nav.css';

// const AppNavbar = () => {
// return (
// <Navbar bg='dark' variant='dark' expand='lg'>
// <Navbar.Brand as={Link} to='/'>
// Book Store
// </Navbar.Brand>
// {/* <Navbar.Toggle aria-controls='navbar' /> */}
// {/* <Navbar.Collapse id='navbar'> */}
//         <Nav className='ml-auto justify-content-center'>
            
// <Nav.Link as={Link} to='/'>
// Home
//             </Nav.Link>
            
// <Nav.Link as={Link} to='/cart'>
// Cart
// </Nav.Link>
// <Nav.Link as={Link} to='/login'>
// Login
// </Nav.Link>
// <Nav.Link as={Link} to='/signup'>
// Sign Up
// </Nav.Link>
// <Nav.Link as={Link} to='/search'>
// Search
// </Nav.Link>       
// <Nav.Link as={Link} to='/order-summary'>
// Order Summary
// </Nav.Link>
// </Nav>
// {/* </Navbar.Collapse> */}
// </Navbar>
// );
// };
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Search from './Search';

// const Search = () => {
//   // create state for holding returned database data
//   const [searchedBooks, setSearchedBooks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');
//   // create state to hold saved bookId values
//   const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

//   // Connect to the database
//   useEffect(() => {
//     async function connectToDb() {
//       const client = new MongoClient(url, { useNewUrlParser: true });
//       try {
//         await client.connect();
//         console.log('Connected to the database');
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     connectToDb();
//   }, []);

//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!searchInput) {
//       return false;
//     }
//     try {
//       // Connect to the database
//       const client = new MongoClient(url, { useNewUrlParser: true });
//       await client.connect();
//       console.log('Connected to the database');
//       const db = client.db(dbName);
//       const books = db.collection('books');
//       // Search the database
//       const searchedBooksArr = await books.find({
//         $text: { $search: searchInput },
//       }).toArray();
//       setSearchedBooks(searchedBooksArr);
//     } catch (error) {
//       console.log(error);
//     }
//   };


  function AppNavbar() {
    return (
      <Navbar expand="xl">
        <Container fluid>
          <Navbar.Brand href="#">TBH</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/cart">My Cart</Nav.Link>
                                          
           
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Search/>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> 

             <Search/>
            <Button variant="outline-success">Search</Button>
          </Form> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    );
  }

export default AppNavbar;
