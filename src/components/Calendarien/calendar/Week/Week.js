import React from "react";
import "./Week.css";

import Day from "../Day";

const Week = ({data, children, ...rest}) => {
    
    const days = data.map((d, i) => {
        return <Day key={i} {...d} />
    })

    return (
        <div className="calendarien--layout__week">   
            {days}
        </div>
    )
}

export default Week;