import React, { Component } from 'react';
import Calendarien from "./components/Calendarien";

// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

class App extends Component {

    state = {
        date : ''
    }

    handleSelect = (value) => {
        this.setState({
            date: value
        })
    }

    render() {

        const { handleSelect } = this;
        const { date } = this.state; 

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
                    getValue={handleSelect}
                    setFormat={"bm dd, yyyy"}
                    style={
                        {
                            background: "linear-gradient(to right bottom, #000, #fff)",
                            color: "#fff"
                        }
                    }
                />

                {date}
            </div>
        );
    }
}

export default App;
