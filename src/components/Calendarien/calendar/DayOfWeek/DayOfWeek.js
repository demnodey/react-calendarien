import React from "react";
import "./DayOfWeek.css";

import { DOWM } from "../../utils/dates";

const DayOfWeek = () => {

    const dayofweek = DOWM.map( d => (<span key={d} className="calendarien--dow__item">{d}</span>) )

    return (
        <div className="calendarien--dow">
            {dayofweek}
        </div>
    )
}

export default DayOfWeek;