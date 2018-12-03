import React from "react";
import "./Layout.css";

const Layout = ({children, theme, mode, ...rest}) => {

    let options = {};

    if (theme) {
        options['theme'] = theme;
    }

    if (mode) {
        options['mode'] = mode;
    }

    return (
        <div {...options} {...rest}>
            { children }
        </div>
    )
}

export default Layout;