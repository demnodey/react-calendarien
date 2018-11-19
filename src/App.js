import React, { Component } from 'react';
import Calendarien from "./components/Calendarien";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

class App extends Component {

    render() {

        return (
            <div 
                className="App" 
                style={
                    {
                        width: 350,
                        height: 600
                    }
                }
            >
                <Calendarien 
                    customizeIcon={
                        [<MdKeyboardArrowLeft />, <MdKeyboardArrowRight />]    
                    }
                />
            </div>
        );
    }
}

export default App;
