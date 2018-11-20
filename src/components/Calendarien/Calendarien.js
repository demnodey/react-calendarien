import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./common/Layout";
import Header from "./common/Header";
// import Footer from "./common/Footer";

import Viewer from "./calendar/Viewer";

import { MILLISECONDS } from "./utils/dates";

class Calendarien extends Component {

    static defaultProps = {
        layout : {
            width: "100%",
            height: "inheriet",
            color: '#262626'
        },
        allowRange : [],
        disabled : false,
        customizeIcon: [],
        setDate: "",
        setFormat: "",
        getValue: () => {},
    }

    state = {
        value : MILLISECONDS(),
        selectedValue : 0,
        mode : 'default'
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleSelect = (selectedValue) => {
        this.setState({ selectedValue })
    }

    handleMonthChange = (value) => {
        this.setState({ 
            value
        })
    }

    setPropsValue = (selectValue) => {
        const { getValue } = this.props;
        getValue(selectValue);
    }

    render () {

        const {
            handleSelect,
            handleMonthChange,
            setPropsValue
        } = this;

        const { 
            layout,
            customizeIcon
        } = this.props;

        const { 
            value,
            selectedValue
        } = this.state;

        return (
            <Layout className="calendarien" style={layout}>
                <Header 
                    value={value} 
                    customizeIcon={customizeIcon}
                    handleMonthChange={handleMonthChange}
                />
                <Viewer
                    value={value}
                    height={layout.height}
                    handleSelect={handleSelect}
                    selectedValue={selectedValue}
                    setPropsValue={setPropsValue}
                />
                {/* <Footer/> */}
            </Layout>
        )
    }
}

Calendarien.propTypes = {
    layout: PropTypes.shape({ 
        background: PropTypes.string
    }),
    now: PropTypes.object,
    mode: PropTypes.string,
    allowRange: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    customizeIcon: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.object, 
            PropTypes.string,
        ])
    ),
    setDate: PropTypes.string,
    setFormat: PropTypes.string,
    getValue: PropTypes.func
}

export default Calendarien;