import './Section.css';

export default function Section(props) {
    return <div {...props} className="section">{props.children}</div>;
}
