import React from "react";
import "./Day.css";

import { MOVE_MONTH, CREATE } from "../../utils/dates";

const Day = ({
        date,
        year, 
        month,
        today,
        local,
        selected,
        handleSelect,
        setPropsValue,
        handleMonthChange
    }) => {

    const _today = today ? 'today' : "";
    const _selected = selected ? 'selected' : "";
    const _class = [_today, _selected];
    const _date = `${year}-${month}-${date}`;
    const milllitime = CREATE(_date).getTime();

    return (
        <div 
            className={`calenderien--day calenderien--day__${local} ${_class.join(" ")}`}
            data-local={local}
            onClick={() => {

                if (local !== 'current') {
                    handleMonthChange(milllitime);
                }

                handleSelect(date)
                setPropsValue(_date);
            }}
        >
            <div className={`calendarien--day__date`}>{ date }</div>
        </div>
    )
}

export default Day;