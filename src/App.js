import React, { Component } from 'react';
import Calendarien from "./components/Calendarien";

// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

class App extends Component {
    render() {
        
        const style= { 
            width: 330,
            height: 500
        }

        return (
            <div className="App" style={style}>
                <Calendarien/>
            </div>
        );
    }
}

export default App;
