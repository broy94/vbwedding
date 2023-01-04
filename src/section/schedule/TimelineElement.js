import "./TimelineElement.css";
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {localizedStrings} from "../../Localization";

function TimelineLink(props) {
    return (
        <span className="button p-1 mt-3 me-2">
            <a href={props.link.href}>
                {localizedStrings.schedule[props.element.localizationId].linkTexts[0]}
            </a>
        </span>
    );
}

const createTimelineLink = function (element) {
    return (link, i) => <TimelineLink key={element.id + "-" + i} link={link} element={element} />;
}

function TimelineElement(props) {
    return (
        <VerticalTimelineElement
            id={props.element.id}
            contentStyle={{background: 'var(--light-color)', color: 'var(--bg-color)'}}
            contentArrowStyle={{borderRight: '7px solid var(--light-color)'}}
            date={localizedStrings.schedule[props.element.localizationId].time}
            dateClassName="time"
            iconStyle={{background: 'var(--light-color)', color: 'var(--bg-color)'}}
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
