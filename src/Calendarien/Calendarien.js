import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./common/Layout";
import Header from "./common/Header";
import Footer from "./common/Footer";

import Viewer from "./calendar/Viewer";

import { MILLISECONDS, CREATE } from "./utils/dates";
import { format } from "./utils/format";
import { joinstr, isValid } from "./utils/util";

class Calendarien extends Component {

    static defaultProps = {
        style : {
            width: '100%',
            height: 'inherit',
            color: '#262626'
        },
        format: '',
        setDate: '',
        theme: '',
        mode : 'default',
        visibleMyDate: false,
        visibleToday: false,
        disabled : false,
        allowRange : false,
        layoutOption: [],
        customizeIcon: [],
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
        this.setState({ value })
    }

    onMyDate = () => {
        this.initialize();
    }

    onToday = (value) => {
        this.setState({ value })
    }

    setPropsValue = (selectValue) => {
        const { getValue, format: fm } = this.props;
        const result = !fm ? selectValue : format(fm, selectValue);

        getValue(result);
    }

    componentDidMount () {
        this.initialize();
    }

    componentDidUpdate (prevProps, prevState) {
        const { setDate } = this.props;

        if (prevProps.setDate !== this.props.setDate) {
            const is = isValid(setDate);

            if (is) {
                this.initialize();
            } else {
                console.warn('Please fill in the correct date format \n 18 01 01 (x) \n 2018 01 01 (o)');
            }
        }
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
            theme,
            layoutOption,
            customizeIcon,
            visibleMyDate,
            visibleToday,
            disabled,
            setDate
        } = this.props;

        const { 
            value,
            selectedValue
        } = this.state;

        const now = disabled ? Date.now() : 0;
        const classnameJoin = joinstr("calendarien", layoutOption);

        return (
            <Layout className={classnameJoin} theme={theme} style={style}>
                <Header 
                    value={value} 
                    customizeIcon={customizeIcon}
                    handleMonthChange={handleMonthChange}
                />
                <Viewer
                    value={value}
                    handleSelect={handleSelect}
                    handleMonthChange={handleMonthChange}
                    selectedValue={selectedValue}
                    setPropsValue={setPropsValue}
                    disabled={disabled}
                    now={now}
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
    theme: PropTypes.string,
    setDate: PropTypes.string,
    format: PropTypes.string,
    disabled: PropTypes.bool,
    visibleToday: PropTypes.bool,
    visibleMyDate: PropTypes.bool,
    allowRange: PropTypes.bool,
    layoutOption: PropTypes.arrayOf(PropTypes.string),
    customizeIcon: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.object, 
            PropTypes.string,
        ])
    ),
    getValue: PropTypes.func,
}

export default Calendarien;