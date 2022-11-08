import React from 'react';
import './CountdownBar.css';
import Countdown from "react-countdown";

const toTimeStr = (unit, unitStr) => {
    return unit > 0 ? `${unit} ${unitStr}` : "";
}

class CountdownBar extends React.Component {
    WEDDING_DATE = new Date(2023,6-1,3,16,0,0);
    renderer({days, hours, minutes, seconds, completed}) {
        const daysStr = toTimeStr(days, "nap");
        const hoursStr = toTimeStr(hours, "óra");
        const minutesStr = toTimeStr(minutes, "perc");
        const secondsStr = toTimeStr(seconds, "másodperc");
        if (!completed)
            return `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
    }

    render() {
        return (
            <div className="countdown sticky-bottom">
                <h1>
                    <Countdown date={this.WEDDING_DATE} className="align-middle" renderer={this.renderer} />
                </h1>
            </div>
        );
    }
}

export default CountdownBar;