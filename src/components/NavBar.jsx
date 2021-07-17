// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
import CartWidget from './CartWidget'


function NavBar() {
    return (
        <div>
           <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Cristel Tapia</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link1">Link 1</Nav.Link>
      <Nav.Link href="#link2">Link 2</Nav.Link>
      <Nav.Link href="#link3">Link 3</Nav.Link>
      <Nav.Link href="#link3"><CartWidget/></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    )
}

export default NavBar
