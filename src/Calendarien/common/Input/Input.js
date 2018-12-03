import React from "react";

const Input = ({mode, value, onFocus, ...rest}) => {
    
    if (mode === 'default') {
        return ''; 
    }
    
    return (
        <input 
            value={value} 
            onFocus={() => { onFocus(true) }}
            {...rest}
        />
    );
}

export default Input;