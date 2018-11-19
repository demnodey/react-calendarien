import React from "react";
import "./Day.css";

const Day = ({date, today, local}) => {

    function handleClick () {
        console.log(date);
    }

    const _today = today ? 'today' : "";


    return (
        <div 
            className={`calendrien--layout__day ${_today}`} 
            data-local={local} 
            onClick={handleClick}
        >
            { date }
        </div>
    )
}

export default Day;