import React from 'react';
import './Section.css';

class Section extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="section">
                {this.props.children}
            </div>
        );
    }
}

export default Section;