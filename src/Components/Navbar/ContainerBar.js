import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.scss';

export default function ContainerBar() {

  return (
    <>
      <Navbar className="bar-border">
        <Navbar.Brand href="#home">ALL</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">DOCUMENTARY</Nav.Link>
          <Nav.Link href="#features">COMEDY</Nav.Link>
          <Nav.Link href="#pricing">HORROR</Nav.Link>
          <Nav.Link href="#pricing">CRIME</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#pricing">SORT BY</Nav.Link>
          <Nav.Link href="#pricing">REALEASE DATE</Nav.Link>
        </Nav>
      </Navbar>

    </>
  );  
} 
