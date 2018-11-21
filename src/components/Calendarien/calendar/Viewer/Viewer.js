import React from "react";
import "./Viewer.css";

import Week from "../Week";

import { WEEK_COUNT, CREATE, START_DAY, LAST_DATE } from "../../utils/dates";
import { line, createArray, ymd } from "../../utils/util";

const Viewer = ({value, selectedValue, setPropsValue, handleSelect}) => {

    let startDate = 0;

    const _today = CREATE().getDate();
    const _tomonth = CREATE().getMonth() + 1;
    const start = START_DAY(value); // of week ex) sunday 0, monday 1 ...
    const end = LAST_DATE(value); // of date
    const { total } = line(start, end);
    
    const prototyper = createArray(total);

    const { 
        y : year, 
        m : month,
        d : day
    } = ymd(value);

    const WeekRow = prototyper.map((d, i) => {
        const data = WEEK_COUNT.map((_d, _i) => {

            const realDate = startDate + 1;
            let selected = realDate === (selectedValue || day);
            let today = realDate === _today;

            if (_tomonth !== month) {
                today = false;
            }

            if (i === 0 && _i >= start) {
                startDate++;
                return {date: startDate, year, month, today, selected , local: 'current'}
            } else if ( i !== 0 && startDate < end) {
                startDate++;
                return {date: startDate, year, month, today, selected, local: 'current'}
            } else {
                return {date: null, year, month, today: false, selected: false, local: ''}
            }
        })

        return (
            <Week 
                key={`${i}`} 
                data={data} 
                handleSelect={handleSelect}
                setPropsValue={setPropsValue}
            />
        )
    });

    return (
        <div className="calendarien--viewer">
            {WeekRow}
        </div>
    )
}

export default Viewer;