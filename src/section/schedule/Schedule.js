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
        time: "14:00",
        icon: faDoorOpen,
        localizationId: "guestReception",
        links: []
    },
    {
        id: "wedding",
        time: "16:00",
        icon: faHeart,
        localizationId: "wedding",
        links: []
    },
    {
        id: "bouquet-toss",
        time: "16:30",
        icon: faLeaf,
        localizationId: "bouquetToss",
        links: []
    },
    {
        id: "group-photos",
        time: "16:45",
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
        time: "17:45",
        icon: faChampagneGlasses,
        localizationId: "hallEntry",
        links: []
    },
    {
        id: "dinner",
        time: "18:30",
        icon: faUtensils,
        localizationId: "dinner",
        links: []
    },
    {
        id: "surprise",
        time: "20:00",
        icon: faQuestion,
        localizationId: "surprise",
        links: []
    },
    {
        id: "cake-cutting",
        time: "22:30",
        icon: faCakeCandles,
        localizationId: "cakeCutting",
        links: []
    },
    {
        id: "bridal-dance",
        time: "23:30",
        icon: faShoePrints,
        localizationId: "bridalDance",
        links: []
    },
    {
        id: "red-dress",
        time: "00:30",
        icon: faPersonHalfDress,
        localizationId: "redDress",
        links: []
    },
    {
        id: "party",
        time: "01:00",
        icon: faMartiniGlassCitrus,
        localizationId: "party",
        links: []
    }
];

function Schedule() {
    return (
        <Section id="schedule">
            <VerticalTimeline children lineColor="var(--dark-color)">
                {timelineElements.map(createTimelineElement)}
            </VerticalTimeline>
        </Section>
    );
}

export default Schedule;
