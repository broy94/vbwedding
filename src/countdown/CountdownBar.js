import './CountdownBar.css';
import Countdown from "react-countdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHourglassHalf} from "@fortawesome/free-solid-svg-icons";
import {localizedStrings} from "../Localization";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const toTimeStr = (unit, translatedUnit) => {
    const unitStr = unit === 1 ? translatedUnit.singular : translatedUnit.plural;
    return unit > 0 ? `${unit} ${unitStr}` : "";
}
const WEDDING_DATE = new Date(2023,6-1,3,16,0,0);

function CountdownBar() {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        const daysStr = toTimeStr(days, localizedStrings.countdown.day);
        const hoursStr = toTimeStr(hours, localizedStrings.countdown.hour);
        const minutesStr = toTimeStr(minutes, localizedStrings.countdown.minute);
        const secondsStr = toTimeStr(seconds, localizedStrings.countdown.second);
        if (!completed)
            return `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
    }

    return (
        <div className="countdown sticky-bottom">
            <Container>
                <Row>
                    <Col className="my-auto">
                        <FontAwesomeIcon icon={faHourglassHalf} />
                        &nbsp;
                        <Countdown date={WEDDING_DATE} className="align-middle" renderer={renderer} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CountdownBar;