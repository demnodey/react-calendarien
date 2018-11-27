import React from "react";
import "./Day.css";

import { CREATE } from "../../utils/dates";

const Day = ({
        date,
        year, 
        month,
        today,
        local,
        selected,
        disabled,
        now,
        handleSelect,
        setPropsValue,
        handleMonthChange
    }) => {

    const _date = `${year}-${month}-${date}`;
    const milllitime = CREATE(_date).getTime();
    
    function handleEvent () {
        if (local !== 'current') handleMonthChange(milllitime);
        handleSelect(date)
        setPropsValue(_date);
    }

    let _disabled = '';
    const _today = today ? 'today' : '';
    const _selected = selected ? 'selected' : '';

    if (disabled) {
        if (now > milllitime) {
            _disabled = disabled ? 'disabled' : '';
        }
    }

    const _class = [_today, _selected, _disabled];
    const cs = _class.filter( d => d !== "");

    return (
        <div 
            className={`calenderien--day calenderien--day__${local} ${cs.join(" ")}`}
            // data-local={local}
            onClick={() => {
                if (disabled) {
                    now < milllitime && handleEvent();
                } else {
                    handleEvent();
                }
            }}
        >
            <div className={`calendarien--day__date`}>{ date }</div>
        </div>
    )
}

export default Day;