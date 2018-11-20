import React from "react";
import "./Day.css";

const Day = ({
        date, 
        year, 
        month, 
        today, 
        local, 
        selected, 
        handleSelect, 
        setPropsValue
    }) => {

    const _today = today ? 'today' : "";
    const _selected = selected ? 'selected' : "";
    const options = [_today, _selected];

    return (
        <div 
            className={`calenderien--day calenderien--day__${local} ${options.join(" ")}`}
            data-local={local}
            onClick={() => {
                handleSelect(date)
                setPropsValue(`${year} ${month} ${date}`);
            }}
        >
            <div className={`calendarien--day__date`}>{ date }</div>
        </div>
    )
}

export default Day;