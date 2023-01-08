import "./Button.css";
import {localizedStrings} from "../Localization";

const googleFormsLink = "https://forms.gle/2HpVHVdFGA3qiUaf7";

function Button({className, children}) {
    const classNames = className ? " " + className : "";
    return (
        <span className={"button px-2 py-0" + classNames}>
            <a href={googleFormsLink} target="_blank" rel="noreferrer">
                {children}
            </a>
        </span>
    );
}

export default Button;
