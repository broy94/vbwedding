import "./Accommodation.css";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {createCard} from "./AccommodationCard";
import {localizedStrings} from "../../Localization";

const accommodations = [
    {
        key: 1,
        name: "Kobza Tanya",
        maxPeople: 50,
        distance: "200 m",
        phone: "+36305766545",
        email: "kobza@mail.datanet.hu",
        maps: "https://goo.gl/maps/YGkYf5bK3y52pXjC6",
        website: "https://kobzatanya.tripod.com"
    },
    {
        key: 2,
        name: "Krisztina Farm",
        maxPeople: 14,
        distance: "800 m",
        phone: "+36302058713",
        email: "info@krisztinafarm.eu",
        maps: "https://g.page/krisztinafarm?share",
        website: "https://krisztinafarm.eu"
    },
    {
        key: 3,
        name: "Idilli Pihenőpark",
        maxPeople: 42,
        distance: "1500 m",
        phone: "+36205471217",
        email: "idillipihenopark@gmail.com",
        maps: "https://goo.gl/maps/8o1ZpjQ8gcAwVf5E7",
        website: "https://idillirendezvenyhaz.hu"
    },
    {
        key: 4,
        name: "Ida Panzió",
        maxPeople: 30,
        distance: "5 km",
        phone: "+36204190348",
        email: "info@panzioida.hu",
        maps: "https://goo.gl/maps/HxEsDP3fYP4bdWn76",
        website: "http://www.panzioida.hu/"
    },
    {
        key: 5,
        name: "Mizse Motel",
        maxPeople: 55,
        distance: "7 km",
        phone: "+3676356800",
        email: "mizsemotel@t-online.hu",
        maps: "https://g.page/mizse-motel?share",
        website: "https://mizsemotel.hu/"
    },
    {
        key: 6,
        name: "Vadvirágos Vendégház",
        maxPeople: 13,
        distance: "10 km",
        phone: "+36709476800",
        email: "ggizella@alfoldingatlan.hu",
        maps: "https://goo.gl/maps/pvBvVxxyuBbpoV368",
        website: "https://www.facebook.com/VadviragosVendeghaz/"
    }
];

function Accommodation() {
    return (
        <Section id="accommodation">
            <Container>
                <Row>
                    <Col className="py-4">
                        <div className="w-75 mx-auto">
                            <h2>
                                <FontAwesomeIcon icon={faCircleInfo}/>
                            </h2>
                            {localizedStrings.accommodation.information.text} <a href="https://www.tanyacsarda.hu/szolgaltatasaink/szallas/" target="_blank">{localizedStrings.accommodation.information.linkText}</a>.
                        </div>
                    </Col>
                </Row>
                <Row sm={2} lg={3}>
                    {accommodations.map(createCard)}
                </Row>
            </Container>
        </Section>
    );
}
export default Accommodation;
