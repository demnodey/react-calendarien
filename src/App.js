import React, { Component } from 'react';
import Calendarien from "./components/Calendarien";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

class App extends Component {

    handleSelect = (value) => {
        console.log(value)
    }

    render() {

        const { handleSelect } = this;

        return (
            <div 
                className="App" 
                style={
                    {
                        width: 300,
                        height: 400
                    }
                }
            >
                <Calendarien
                    setDate="2019 6 18"
                    customizeIcon={
                        [<MdKeyboardArrowLeft />, 
                        <MdKeyboardArrowRight />]    
                    }
                    getValue={handleSelect}
                    setFormat={"sm dd, yyyy"}
                />
            </div>
        );
    }
}

export default App;
