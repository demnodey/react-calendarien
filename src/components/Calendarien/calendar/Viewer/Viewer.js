import React from "react";
import "./Viewer.css";

import Week from "../Week";

import { WEEK_COUNT, CREATE, START_DAY, LAST_DATE, MOVE_MONTH } from "../../utils/dates";
import { line, createArray, ymd, pnCalculator } from "../../utils/util";

const Viewer = ({
        value, 
        selectedValue, 
        setPropsValue, 
        handleSelect,
        handleMonthChange
    }) => {

    let startDate = 0;
    let nextDate = 0;

    const _today = CREATE().getDate();
    const _tomonth = CREATE().getMonth() + 1;
    const start = START_DAY(value); // of week ex) sunday 0, monday 1 ...
    const end = LAST_DATE(value); // of date
    const { total } = line(start, end);
    
    const prototyper = createArray(total);

    const prevMonth = MOVE_MONTH(value, -1);
    const prevLastDate = LAST_DATE(prevMonth);

    let prevDate = prevLastDate - start;

    const { 
        y : year, 
        m : month,
        d : day
    } = ymd(value);

    const WeekRow = prototyper.map((d, i) => {
        const data = WEEK_COUNT.map((_d, _i) => {

            const realDate = startDate + 1;
            const _selected = !selectedValue ? day : selectedValue;
            const selected = realDate === _selected;
            const today = _tomonth !== month ? false : realDate === _today;

            if (i === 0 && _i >= start) {
                startDate++;
                return {date: startDate, year, month, today, selected , local: 'current'}
            } else if ( i !== 0 && startDate < end) {
                startDate++;
                return {date: startDate, year, month, today, selected, local: 'current'}
            } else {
                if (i === 0) {
                    const {
                        y : prevYear,
                        m : prevMonth
                    } = pnCalculator({year, month}, -1);

                    // console.log(prevMonth," ",prevYear);

                    prevDate++
                    return {date: prevDate, year: prevYear, month: prevMonth, selected, local: 'prev'}
                } else {
                    const {
                        y : nextYear,
                        m : nextMonth
                    } = pnCalculator({year, month}, 1);

                    // console.log(nextMonth," ",nextYear);

                    nextDate++
                    return {date: nextDate, year: nextYear, month: nextMonth, selected, local: 'next'}    
                }
            }
        })

        return (
            <Week 
                key={`${i}`} 
                data={data} 
                handleSelect={handleSelect}
                setPropsValue={setPropsValue}
                handleMonthChange={handleMonthChange}
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