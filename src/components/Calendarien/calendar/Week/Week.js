import React from "react";
import "./Week.css";

import Day from "../Day";

const Week = ({data, children, handleSelect, setPropsValue, ...rest}) => {
    
    const days = data.map((d, i) => {
        return (
            <Day 
                key={i} 
                handleSelect={handleSelect} 
                setPropsValue={setPropsValue}
                {...d} 
            />
        )
    })

    return (
        <div className="calendarien--week">   
            {days}
        </div>
    )
}

export default Week;