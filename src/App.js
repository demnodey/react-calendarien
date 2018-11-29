import React, { Component } from 'react';
import Calendarien from "./Calendarien";

class App extends Component {

    render() {
        const style= { 
            width: 320,
            height: 450
        }

        return (
            <div className="App" style={style}>
                <Calendarien />
            </div>
        );
    }
}

export default App;