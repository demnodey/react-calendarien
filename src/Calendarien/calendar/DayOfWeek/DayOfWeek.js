import React from "react";
import "./DayOfWeek.css";

import { DOWM } from "../../utils/dates";

const DayOfWeek = () => (
    <div className="calendarien--dow">
        {
            DOWM.map( 
                d => (
                    <span key={d} className="calendarien--dow__item">{d}</span>
                ) 
            )
        }
    </div>
)

export default DayOfWeek;