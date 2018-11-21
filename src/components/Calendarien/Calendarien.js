import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./common/Layout";
import Header from "./common/Header";
import Footer from "./common/Footer";

import Viewer from "./calendar/Viewer";

import { MILLISECONDS, CREATE } from "./utils/dates";
import { format } from "./utils/format";

class Calendarien extends Component {

    static defaultProps = {
        style : {
            width: '100%',
            height: 'inheriet',
            color: '#262626'
        },
        setFormat: '',
        setDate: '',
        mode : 'default',
        visibleMyDate: false,
        visibleToday: false,
        disabled : false,
        customizeIcon: [],
        allowRange : [],
        getValue: () => {},
    }

    state = {
        value : MILLISECONDS(),
        selectedValue : 0
    }

    initialize = () => {
        const { setDate } = this.props;
        if (setDate) {
            this.setState({
                value: CREATE(setDate).getTime()
            })
        }
    }

    handleSelect = (selectedValue) => {
        this.setState({ selectedValue })
    }

    handleMonthChange = (value) => {
        this.setState({ 
            value
        })
    }

    onMyDate = () => {
        this.initialize();
    }

    onToday = (value) => {
        this.setState({ value })
    }

    setPropsValue = (selectValue) => {
        const { getValue, setFormat } = this.props;
        const result = !setFormat ? selectValue : format(setFormat, selectValue);

        getValue(result);
    }

    componentDidMount () {
        this.initialize();
    }

    componentDidUpdate (prevProps, prevState) {

    }

    render () {

        const {
            handleSelect,
            handleMonthChange,
            setPropsValue,
            onMyDate,
            onToday
        } = this;

        const { 
            style,
            customizeIcon,
            visibleMyDate,
            visibleToday,
            setDate
        } = this.props;

        const { 
            value,
            selectedValue
        } = this.state;

        return (
            <Layout className="calendarien" style={style}>
                <Header 
                    value={value} 
                    customizeIcon={customizeIcon}
                    handleMonthChange={handleMonthChange}
                />
                <Viewer
                    value={value}
                    handleSelect={handleSelect}
                    selectedValue={selectedValue}
                    setPropsValue={setPropsValue}
                />
                <Footer
                    visibleMyDate={visibleMyDate}
                    visibleToday={visibleToday}
                    setDate={setDate}
                    onMyDate={onMyDate}
                    onToday={onToday}
                />
            </Layout>
        )
    }
}

Calendarien.propTypes = {
    style: PropTypes.shape({ 
        background: PropTypes.string
    }),
    mode: PropTypes.string,
    disabled: PropTypes.bool,
    customizeIcon: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.object, 
            PropTypes.string,
        ])
    ),
    allowRange: PropTypes.arrayOf(PropTypes.string),
    setDate: PropTypes.string,
    setFormat: PropTypes.string,
    visibleToday: PropTypes.bool,
    getValue: PropTypes.func,
}

export default Calendarien;