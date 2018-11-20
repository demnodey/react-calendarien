import React from "react";
import "./Viewer.css";

import Week from "../Week";

import { WEEK_COUNT, CREATE, START_DAY, LAST_DATE } from "../../utils/dates";
import { line, createArray, ymd } from "../../utils/util";

const Viewer = ({value, height, selectedValue, setPropsValue, handleSelect}) => {

    let startDate = 1;
        
    let def = { date: 0, today : false, local: '' }
    const _today = CREATE().getDate();
    const _tomonth = CREATE().getMonth() + 1;
    const start = START_DAY(value); // of week ex) sunday 0, monday 1 ...
    const end = LAST_DATE(value); // of date
    const { rest, total } = line(start, end);
    
    const prototyper = createArray(total);

    const { 
        y : year, 
        m : month
    } = ymd(value);

    const WeekRow = prototyper.map((d, i) => {
        const data = WEEK_COUNT.map((_d, _i) => {

            let selected = startDate === selectedValue;
            let today = startDate === _today;

            if (_tomonth !== month) {
                today = false;
            }

            if (i === 0 && _i >= start) {
                def = {...def, date: startDate, year, month, today, selected , local: 'current'}
                startDate++;
            } else if ( i !== 0 && startDate <= end) {
                def = {...def, date: startDate, year, month, today, selected, local: 'current'}
                startDate++;
            } else {
                def = {...def, date: null, year, month, today: false, selected: false, local: ''}
            }

            return def;
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