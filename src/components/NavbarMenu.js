import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NavbarMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/" className='text-info' >CoderFaruk</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/portfolio" >Portfolio</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default NavbarMenu