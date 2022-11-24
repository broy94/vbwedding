import {Col, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRightToLine,
    faEnvelope,
    faGlobe,
    faHotel,
    faMapLocationDot,
    faPerson,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

function AccommodationCard(props) {
    return (
        <Col sm className="py-3">
            <Stack>
                <div>
                    <FontAwesomeIcon icon={faHotel} />
                </div>
                <div>
                    <h5>{props.accommodation.name}</h5>
                </div>
                <div className="small">
                    <FontAwesomeIcon icon={faPerson} /> max. {props.accommodation.maxPeople}
                </div>
                <div className="small">
                    <FontAwesomeIcon icon={faArrowsLeftRightToLine} /> {props.accommodation.distance}
                </div>
                <div>
                    <a href={`tel:${props.accommodation.phone}`} className="small px-1">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a href={`mailto:${props.accommodation.email}`} className="small px-1">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href={`${props.accommodation.maps}`} target="_blank" className="small px-1">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                    </a>
                    <a href={`${props.accommodation.website}`} target="_blank" className="small px-1">
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                </div>
            </Stack>
        </Col>
    );
}

export const createCard = accommodation => <AccommodationCard key={accommodation.key} accommodation={accommodation} />;
