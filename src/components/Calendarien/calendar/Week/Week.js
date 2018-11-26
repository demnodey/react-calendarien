import React from "react";
import PropTypes from "prop-types";
import "./Week.css";

import Day from "../Day";

const Week = ({
        data, 
        disabled,
        now,
        handleSelect, 
        setPropsValue, 
        handleMonthChange, 
        ...rest
    }) => {

    const days = data.map((d, i) => {
        return (
            <Day 
                key={i} 
                disabled={disabled}
                now={now}
                handleSelect={handleSelect} 
                setPropsValue={setPropsValue}
                handleMonthChange={handleMonthChange}
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

Week.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    handleSelect: PropTypes.func,
    setPropsValue: PropTypes.func,
    handleMonthChange: PropTypes.func

}

export default Week;