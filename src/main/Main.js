import React from 'react';
import './Main.css';
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ScrollerLink from "../ScrollerLink";

class Main extends React.Component {
    render() {
        return (
            <Section id="main">
                <Container className="position-absolute top-50 start-50 translate-middle">
                    <Row>
                        <Col><h1 className="display-1">Viki & Bubi Wedding</h1></Col>
                    </Row>
                    <Row>
                        <Col>Felsőlajos, Új Tanyacsárda</Col>
                    </Row>
                    <Row>
                        <Col>2023.06.03.</Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <Nav.Link as={ScrollerLink} to="rsvp" className="rsvp">Visszajelzés</Nav.Link>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
            </Section>
        );
    }
}

export default Main;