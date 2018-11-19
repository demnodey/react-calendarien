import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

import Button from "../Button";

const Header = ({ title, customizeIcon, handleNext, handlePrev }) => {

    return (
        <div className="calendarien--header">
            <Button className="btn__prev" handleEvent={handlePrev}>
                {customizeIcon[0]}
            </Button>
            <div className="calendarien--header__title">
                {title}
            </div>
            <Button className="btn__next" handleEvent={handleNext}>
                {customizeIcon[1]}
            </Button>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;