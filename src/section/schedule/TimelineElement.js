import "./TimelineElement.css";
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {localizedStrings} from "../../Localization";
import Button from "../../rsvp-button/Button";

function TimelineLink(props) {
    return (
        // <span className="button p-1 mt-3 me-2">
        //     <a href={props.link.href}>
        //         {localizedStrings.schedule[props.element.localizationId].linkTexts[0]}
        //     </a>
        // </span>
        <Button className="mt-3 p-1" href={props.link.href}>
            {localizedStrings.schedule[props.element.localizationId].linkTexts[0]}
        </Button>
    );
}

const createTimelineLink = function (element) {
    return (link, i) => <TimelineLink key={element.id + "-" + i} link={link} element={element} />;
}

function TimelineElement(props) {
    return (
        <VerticalTimelineElement
            id={props.element.id}
            contentStyle={{background: 'var(--p4-color)', color: 'var(--p1-color)'}}
            contentArrowStyle={{borderRight: '7px solid var(--p4-color)'}}
            date={localizedStrings.schedule[props.element.localizationId].time}
            dateClassName="time"
            iconStyle={{background: 'var(--p4-color)', color: 'var(--p1-color)'}}
            icon={<FontAwesomeIcon icon={props.element.icon}/>}
            iconClassName="icon">
            <h4 className="vertical-timeline-element-title">
                {localizedStrings.schedule[props.element.localizationId].title}
            </h4>
            <p>
                {localizedStrings.schedule[props.element.localizationId].details}
            </p>
            <div>
                {props.element.links.map(createTimelineLink(props.element))}
            </div>
        </VerticalTimelineElement>
    );
}

export const createTimelineElement = element => <TimelineElement key={element.id} element={element}/>;
