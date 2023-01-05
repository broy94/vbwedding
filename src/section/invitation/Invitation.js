import "./Invitation.css";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {MDBCarousel, MDBCarouselItem} from "mdb-react-ui-kit";


import invHuFront from "./invitation_hu_front.png";
import invHuBack from "./invitation_hu_back.png";
import invEnFront from "./invitation_en_front.png";
import invEnBack from "./invitation_en_back.png";
import RsvpButton from "../../rsvp-button/RsvpButton";

const getFront = lang => lang === "hu" ? invHuFront : invEnFront;
const getBack = lang => lang === "hu" ? invHuBack : invEnBack;

function Invitation({currentLanguage}) {
    const front = getFront(currentLanguage);
    const back = getBack(currentLanguage);

    return (
        <Section id="invitation" className="p-md-5 p-4">
            <Container className="w-md-50 pt-5">
                <Row>
                    <Col>
                        <MDBCarousel showIndicators showControls dark fade interval={15000}>
                            <MDBCarouselItem
                                className='w-100 d-block front'
                                itemId={1}
                                src={front}
                                alt='invitation hu front'>
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block back'
                                itemId={2}
                                src={back}
                                alt='invitation hu back'
                            />
                        </MDBCarousel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RsvpButton className="dark" />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Invitation;

export class onInvitationLanguageChange {
}