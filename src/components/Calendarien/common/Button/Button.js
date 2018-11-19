import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({children, disabled, className, handleEvent, ...rest}) => {

    return (
        <button className={`btn ${className}`} disabled={disabled} onClick={() => handleEvent(className)}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    disabled: PropTypes.bool,
    className: PropTypes.string
}

export default Button;