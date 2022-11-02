import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ScrollerLink from "./ScrollerLink";
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" expand="md">
                <Container>
                    <Navbar.Brand as={ScrollerLink} to="main">Viki & Bubi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={ScrollerLink} to="programs">Programok</Nav.Link>
                            <Nav.Link as={ScrollerLink} to="seating">Ülésrend</Nav.Link>
                            <Nav.Link as={ScrollerLink} to="accommodation">Szállás</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link as={ScrollerLink} to="rsvp" className="rsvp">RSVP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;