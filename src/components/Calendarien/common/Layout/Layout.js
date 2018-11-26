import React from "react";
import "./Layout.css";

const Layout = ({children, ...rest}) => {
    return (
        <div {...rest}>
            { children }
        </div>
    )
}

export default Layout;