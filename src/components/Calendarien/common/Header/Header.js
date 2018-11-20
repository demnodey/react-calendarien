import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

import Button from "../Button";

import { format } from "../../utils/format";
import { MOVE_MONTH } from "../../utils/dates";

const Header = ({ value, customizeIcon, handleMonthChange }) => {

    const _title = format("bm, yyyy", value);

    return (
        <div className="calendarien--header">
            <Button 
                className="btn__prev" 
                handleEvent={handleMonthChange} 
                action={() => MOVE_MONTH(value, -1)}
            >
                {customizeIcon[0]}
            </Button>
            <div className="calendarien--header__title">
                {_title}
            </div>
            <Button 
                className="btn__next" 
                handleEvent={handleMonthChange}
                action={() => MOVE_MONTH(value, 1)}
            >
                {customizeIcon[1]}
            </Button>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.number
}

export default Header;