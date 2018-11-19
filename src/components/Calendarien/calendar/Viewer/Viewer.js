import React from "react";
import "./Viewer.css";

import Week from "../Week";

import { WEEK_COUNT, GET_TODAY, START_DAY, LAST_DATE } from "../../utils/dates";
import { line, createArray } from "../../utils/util";

const Viewer = ({date, height, handleSelect}) => {

    let startDate = 1;
        
    let def = { date: 0, today : false, local: '' }
    const today = GET_TODAY(date);
    const start = START_DAY(date); // of week ex) sunday 0, monday 1 ...
    const end = LAST_DATE(date); // of date
    const { rest, total } = line(start, end);
    
    const prototyper = createArray(total);

    const WeekRow = prototyper.map((d, i) => {
        const data = WEEK_COUNT.map((_d, _i) => {
            if (i === 0 && _i >= start) {
                def = {...def, date: startDate, today: startDate === today, local: 'current'}
                startDate++;
            } else if ( i !== 0 && startDate <= end) {
                def = {...def, date: startDate, today: startDate === today, local: 'current'}
                startDate++;
            } else {
                def = {...def, date: null, today: false, local: ''}
            }

            return def;
        })

        return (
            <Week 
                key={`${i}`} 
                data={data} 
                handleSelect={handleSelect}
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