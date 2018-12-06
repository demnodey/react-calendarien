import React, { Component } from 'react';
import Calendarien from "./Calendarien";

class App extends Component {

    render() {
        // App style
        // const style= { 
        //     width: 320,
        //     height: 450
        // }

        return (
            <div className="App">
                <Calendarien/>
            </div>
        );
    }
}

export default App;