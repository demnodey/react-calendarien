import React, { Component } from 'react';
import Calendarien from "./components/Calendarien";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

class App extends Component {

    render() {
        const style= { 
            width: 320,
            height: 450
        }

        return (
            <div className="App" style={style}>
                <Calendarien 
                    customizeIcon={[
                        <MdKeyboardArrowLeft/>,
                        <MdKeyboardArrowRight/>
                    ]}
                    theme={'darkblue'}
                    layoutOption={['radius']}
                    disabled={true}
                />
               
            </div>
        );
    }
}

export default App;