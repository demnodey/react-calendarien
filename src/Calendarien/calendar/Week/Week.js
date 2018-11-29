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
}) => (
    <div className="calendarien--week">   
        {
            data.map((d, i) => (
                <Day 
                    key={i} 
                    disabled={disabled}
                    now={now}
                    handleSelect={handleSelect} 
                    setPropsValue={setPropsValue}
                    handleMonthChange={handleMonthChange}
                    {...d} 
                />
            ))
        }
    </div>
)

Week.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    disabled: PropTypes.bool,
    now: PropTypes.number,
    handleSelect: PropTypes.func,
    setPropsValue: PropTypes.func,
    handleMonthChange: PropTypes.func

}

export default Week;