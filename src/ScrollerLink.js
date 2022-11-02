import React from 'react';
import {Link} from 'react-scroll';
import './ScrollerLink.css';

class ScrollerLink extends React.Component {
    render() {
        return (
            <span className="scroller-link">
                <Link {...this.props} smooth={false} duration={1000} offset={-55}>{this.props.children}</Link>
            </span>
        );
    }
}

export default ScrollerLink;
