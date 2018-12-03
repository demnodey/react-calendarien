import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

import Button from "../Button";

import { format } from "../../utils/format";
import { MOVE_MONTH } from "../../utils/dates";

const Header = ({ value, customizeIcon, handleMonthChange }) => (
    <div className="calendarien--header">
        <Button 
            className="btn__prev"
            handleEvent={handleMonthChange} 
            action={() => MOVE_MONTH(value, -1)}
        >
            { 
                !customizeIcon[0] ? 
                ( <span dangerouslySetInnerHTML={{__html : '&lsaquo;'}}></span> ) : 
                ( customizeIcon[0] ) 
            }
        </Button>

        <div className="calendarien--header__title">
            {format("bm, yyyy", value)}
        </div>

        <Button 
            className="btn__next" 
            handleEvent={handleMonthChange}
            action={() => MOVE_MONTH(value, 1)}
        >
            { 
                !customizeIcon[1] ? 
                ( <span dangerouslySetInnerHTML={{__html : '&rsaquo;'}}></span> ) :  
                ( customizeIcon[1] ) 
            }
        </Button>
    </div>
);

Header.propTypes = {
    value: PropTypes.number,
    customizeIcon: PropTypes.arrayOf(PropTypes.object)
}

export default Header;