import "./Main.css";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {localizedStrings} from "../../Localization";
import RsvpButton from "../../rsvp-button/RsvpButton";

const googleMapsLink = "https://goo.gl/maps/c9ff9wVG3VXiVAAV8";

function Main() {
    return (
        <Section id="main">
            <Container className="pt-3">
                <Row>
                    <Col className="pb-4 text-center">
                        <small className="details">{localizedStrings.main.details}</small>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>{localizedStrings.main.date}</h2></Col>
                </Row>
                <Row>
                    <Col><h1 className="display-1">{localizedStrings.main.title}</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <a href={googleMapsLink} target="_blank" rel="noreferrer">
                            <span className="button hover-button py-2">
                                <h1 className="mb-0">{localizedStrings.main.venue.title}</h1>
                                <small>{localizedStrings.main.venue.location}</small>
                            </span>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RsvpButton/>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Main;
