import "./Schedule.css";
import Section from "../Section";
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    faCakeCandles,
    faCameraRetro,
    faChampagneGlasses,
    faDoorOpen,
    faHeart,
    faLeaf, faMartiniGlassCitrus, faPersonHalfDress, faQuestion, faShoePrints,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";
import {createTimelineElement} from "./TimelineElement";

const timelineElements = [
    {
        id: "guest-reception",
        icon: faDoorOpen,
        localizationId: "guestReception",
        links: []
    },
    {
        id: "wedding",
        icon: faHeart,
        localizationId: "wedding",
        links: []
    },
    {
        id: "bouquet-toss",
        icon: faLeaf,
        localizationId: "bouquetToss",
        links: []
    },
    {
        id: "group-photos",
        icon: faCameraRetro,
        localizationId: "groupPhotos",
        links: [
            {
                href: "#"
            }
        ]
    },
    {
        id: "hall-entry",
        icon: faChampagneGlasses,
        localizationId: "hallEntry",
        links: []
    },
    {
        id: "dinner",
        icon: faUtensils,
        localizationId: "dinner",
        links: []
    },
    {
        id: "surprise",
        icon: faQuestion,
        localizationId: "surprise",
        links: []
    },
    {
        id: "cake-cutting",
        icon: faCakeCandles,
        localizationId: "cakeCutting",
        links: []
    },
    {
        id: "bridal-dance",
        icon: faShoePrints,
        localizationId: "bridalDance",
        links: []
    },
    {
        id: "red-dress",
        icon: faPersonHalfDress,
        localizationId: "redDress",
        links: []
    },
    {
        id: "party",
        icon: faMartiniGlassCitrus,
        localizationId: "party",
        links: []
    }
];

function Schedule() {
    return (
        <Section id="schedule">
            <VerticalTimeline children lineColor="var(--p1-color)">
                {timelineElements.map(createTimelineElement)}
            </VerticalTimeline>
        </Section>
    );
}

export default Schedule;
