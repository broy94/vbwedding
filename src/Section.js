import React from 'react';
import ScrollerLink from "./ScrollerLink";
import './Section.css';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: this.props.next ? this.props.next : this.props.id,
            prev: this.props.prev ? this.props.prev : this.props.id
        };
    }

    render() {
        return (
            <div id={this.props.id} className="section">
                <p>{this.props.children}</p>
                <p><ScrollerLink to={this.state.next}>next</ScrollerLink></p>
                <p><ScrollerLink to={this.state.prev}>prev</ScrollerLink></p>
            </div>
        );
    }
}

export default Section;