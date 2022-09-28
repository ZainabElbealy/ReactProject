import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';


class Nav extends Component{
  render(){
    return (
      
      <Navbar bg='success'>
        <Container>
          <Navbar.Brand href="#home">Shopping</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text >
            <Badge bg="dark">0</Badge> 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}



export default Nav;