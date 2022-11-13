import './Main.css';
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ScrollerLink from "../ScrollerLink";
import {localizedStrings} from "../Localization";

const googleMapsLink = "https://goo.gl/maps/c9ff9wVG3VXiVAAV8";

function Main() {
    return (
        <Section id="main">
            <Container className="position-absolute top-50 start-50 translate-middle">
                <Row>
                    <Col><h2>{localizedStrings.main.date}</h2></Col>
                </Row>
                <Row>
                    <Col><h1 className="display-1">{localizedStrings.main.title}</h1></Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <a href={googleMapsLink} target="_blank" rel="noreferrer">
                            <span className="button hover p-3">
                                <h1 className="mb-0">{localizedStrings.main.venue.title}</h1>
                                <small>{localizedStrings.main.venue.location}</small>
                            </span>
                        </a>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col>
                        <span className="button mt-3 px-2 py-0">
                            <Nav.Link as={ScrollerLink} to="rsvp" className="rsvp">{localizedStrings.main.rsvpButton}</Nav.Link>
                        </span>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Main;