import React, { Fragment } from "react";
import "./Footer.css";
import Button from "../Button";

import { CREATE } from "../../utils/dates";

const Footer = ({visibleMyDate, visibleToday, setDate, mode, onMyDate, onToday, onSubmit, onClear}) => {
    return (
        <div className="calendarien--footer">
            {
                visibleToday && (
                    <Button 
                        className="btn__primary" 
                        handleEvent={onToday} 
                        action={() => {
                            const time = CREATE();
                            return { 
                                value: time.getTime(),
                                selectedValue: time.getDate()
                            }
                        }}
                    >Today</Button>
                )
            }
            {
                (visibleMyDate && setDate) && (
                    <Button className="btn__default" handleEvent={onMyDate}>My Date</Button>
                )
            }
            {
                mode === 'input' && (
                    <Fragment> 
                        <Button className="btn__white" handleEvent={onSubmit}>Ok</Button>
                        <Button className="btn__white" handleEvent={onClear}>Clear</Button>
                    </Fragment>
                )
            }
            
        </div>
    )
}

export default Footer;