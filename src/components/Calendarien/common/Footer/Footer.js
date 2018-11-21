import React from "react";
import "./Footer.css";
import Button from "../Button";

import { CREATE } from "../../utils/dates";

const Footer = ({visibleMyDate, visibleToday, setDate, onMyDate, onToday}) => {
    return (
        <div className="calendarien--footer">
            {
                visibleToday && (
                    <Button className="btn__default" handleEvent={onToday} action={() => CREATE().getTime()}>Today</Button>
                )
            }
            {
                (visibleMyDate && setDate) && (
                    <Button className="btn__default" handleEvent={onMyDate}>My Date</Button>
                )
            }
            
        </div>
    )
}

export default Footer;