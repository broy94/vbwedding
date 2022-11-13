import {Link} from 'react-scroll';
import './ScrollerLink.css';

function ScrollerLink(props) {
    return (
        <span className="scroller-link">
            <Link {...props} smooth={false} duration={1000} offset={-55}>{props.children}</Link>
        </span>
    );
}

export default ScrollerLink;
