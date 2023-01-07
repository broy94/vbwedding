import "./RsvpButton.css";
import {localizedStrings} from "../Localization";

const googleFormsLink = "https://forms.gle/2HpVHVdFGA3qiUaf7";

function RsvpButton({className}) {
    const classNames = className ? " " + className : "";
    return (
        <span className={"button my-3 px-2 py-0 rsvp" + classNames}>
            <a href={googleFormsLink} target="_blank" rel="noreferrer">
                {localizedStrings.rsvpButton}
            </a>
        </span>
    );
}

export default RsvpButton;
