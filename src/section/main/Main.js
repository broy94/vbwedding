import "./Main.css";
import Section from "../Section";
import {localizedStrings} from "../../Localization";
import RsvpButton from "../../rsvp-button/RsvpButton";

const googleMapsLink = "https://goo.gl/maps/c9ff9wVG3VXiVAAV8";

function Main() {
    return (
        <Section id="main">
            <div className="d-flex justify-content-center py-4">
                <h4>{localizedStrings.main.date}</h4>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <h1 className="display-1 title">{localizedStrings.main.title}</h1>
            </div>
            <div className="d-flex justify-content-center my-1">
                <a href={googleMapsLink} target="_blank" rel="noreferrer">
                    <span className="button hover-button py-2">
                        <h4 className="mb-0">{localizedStrings.main.venue.title}</h4>
                        <small>{localizedStrings.main.venue.location}</small>
                    </span>
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <RsvpButton/>
            </div>
        </Section>
    );
}

export default Main;
