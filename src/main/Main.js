import React from 'react';
import './Main.css';
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ScrollerLink from "../ScrollerLink";

class Main extends React.Component {
    googleMapsLink = "https://goo.gl/maps/c9ff9wVG3VXiVAAV8";

    render() {
        return (
            <Section id="main">
                <Container className="position-absolute top-50 start-50 translate-middle">
                    <Row>
                        <Col><h2>2023.06.03.</h2></Col>
                    </Row>
                    <Row>
                        <Col><h1 className="display-1">Viki & Bubi Wedding</h1></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <a href={this.googleMapsLink} target="_blank">
                                <span className="button hover p-3">
                                    <h1 className="mb-0">Lajosmizse, Új Tanyacsárda</h1>
                                    <small>6055 Felsőlajos, Közös 150.</small>
                                </span>
                            </a>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <span className="button mt-3 px-2 py-0">
                                <Nav.Link as={ScrollerLink} to="rsvp" className="rsvp">Visszajelzés</Nav.Link>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Main;