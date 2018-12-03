import React from "react";
import "./Status.css";

const Status = ({value}) => (
    <div className='calendarien__status'>
        { !value ? "Select Date..." : value }
    </div>
)

export default Status;