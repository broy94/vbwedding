import './Section.css';

export default function Section(props) {
    const classNames = props.className ? " " + props.className : "";
    return <div {...props} className={"section" + classNames}>{props.children}</div>;
}
