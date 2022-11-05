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
                    <Navbar.Brand as={ScrollerLink} to="main" spy={true} activeClass="active-main" className="px-3">Viki & Bubi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={ScrollerLink} to="schedule" spy={true} activeClass="active">Menetrend</Nav.Link>
                            <Nav.Link as={ScrollerLink} to="seating" spy={true} activeClass="active">Ülésrend</Nav.Link>
                            <Nav.Link as={ScrollerLink} to="accommodation" spy={true} activeClass="active">Szállás</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <span className="button">
                                <Nav.Link as={ScrollerLink} to="rsvp" className="rsvp">Visszajelzés</Nav.Link>
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;