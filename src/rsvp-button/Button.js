import "./Button.css";

function Button({children, className, href, blankTarget}) {
    const aProps = {};
    if (blankTarget) {
        aProps.target = "_blank";
        aProps.rel = "noreferrer";
    }
    const classNames = className ? " " + className : "";
    return (
        <span className={"button" + classNames}>
            <a href={href} {...aProps}>
                {children}
            </a>
        </span>
    );
}

export default Button;
