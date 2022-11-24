import "./Accommodation.css";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleInfo, faEnvelope,
    faGlobe,
    faHotel,
    faMapLocationDot,
    faPerson,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

function Accommodation() {
    return (
        <Section id="accommodation">
            <Container>
                <Row>
                    <Col className="py-4">
                        <div className="w-75 mx-auto">
                            <h2>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </h2>
                            A Tanyacsárda saját szálláshelyének összes férőhelye le van foglalva az ifjú pár és közeli hozzátartozói részére (össz. 31 fő).
                            Azonban igény esetén az alábbi környékbeli helyeken lehet szállást foglalni.
                            Javasoljuk, hogy minél előbb kerüljön erre sor.
                            <br />
                            További információ <a href="https://www.tanyacsarda.hu/szolgaltatasaink/szallas/" target="_blank">itt</a>.
                        </div>
                    </Col>
                </Row>
                <Row sm={2} lg={3}>
                    <Col sm className="py-2">
                        <Stack>
                            <div>
                                <FontAwesomeIcon icon={faHotel} />
                            </div>
                            <div>
                                <h4>Kobza Tanya</h4>
                            </div>
                            <div>
                                <a href="tel:+36305766545" className="small px-1">
                                    <FontAwesomeIcon icon={faPhone} />
                                </a>
                                <a href="mailto:kobza@mail.datanet.hu" className="small px-1">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href="https://goo.gl/maps/YGkYf5bK3y52pXjC6" target="_blank" className="small px-1">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                </a>
                                <a href="https://kobzatanya.tripod.com" target="_blank" className="small px-1">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </a>
                            </div>
                            <div className="small">
                                <FontAwesomeIcon icon={faPerson} /> max. 50
                            </div>
                        </Stack>
                    </Col>
                    <Col sm className="py-2">
                        <Stack>
                            <div>
                                <FontAwesomeIcon icon={faHotel} />
                            </div>
                            <div>
                                <h4>Krisztina Farm</h4>
                            </div>
                            <div>
                                <a href="tel:+36302058713" className="small px-1">
                                    <FontAwesomeIcon icon={faPhone} />
                                </a>
                                <a href="mailto:info@krisztinafarm.eu" className="small px-1">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href="https://g.page/krisztinafarm?share" target="_blank" className="small px-1">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                </a>
                                <a href="https://krisztinafarm.eu" target="_blank" className="small px-1">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </a>
                                <a href="https://www.facebook.com/krisztinafarm.felsolajos" target="_blank" className="small px-1">
                                </a>
                            </div>
                            <div className="small">
                                <FontAwesomeIcon icon={faPerson} /> max. 14
                            </div>
                        </Stack>
                    </Col>
                    <Col sm>
                        {/*3*/}
                    </Col>
                    <Col sm>
                        {/*4*/}
                    </Col>
                    <Col sm>
                        {/*5*/}
                    </Col>
                    <Col sm>
                        {/*6*/}
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Accommodation;
