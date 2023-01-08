import "./Main.css";
import Section from "../Section";
import {localizedStrings} from "../../Localization";
import Button from "../../rsvp-button/Button";

const googleMapsLink = "https://goo.gl/maps/c9ff9wVG3VXiVAAV8";
const googleFormsLink = "https://forms.gle/2HpVHVdFGA3qiUaf7";

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
                <a href={googleMapsLink} className="p-2" target="_blank" rel="noreferrer">
                    <span className="hover-button">
                        <h4 className="mb-0">{localizedStrings.main.venue.title}</h4>
                        <small>{localizedStrings.main.venue.location}</small>
                    </span>
                </a>
            </div>
            <div className="d-flex justify-content-center">
                <Button className="my-2 px-2 py-0" href={googleFormsLink} blankTarget>
                    {localizedStrings.rsvpButton}
                </Button>
            </div>
        </Section>
    );
}

export default Main;
