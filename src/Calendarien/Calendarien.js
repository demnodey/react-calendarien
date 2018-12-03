import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./common/Layout";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Input from "./common/Input";

import Viewer from "./calendar/Viewer";
import Status from "./calendar/Status";

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
        inputClass: '',
        visibleMyDate: false,
        visibleToday: false,
        disabled : false,
        allowRange : false,
        setRange : [],
        layoutOption: [],
        customizeIcon: [],
        getValue: () => {},
    }

    state = {
        value : MILLISECONDS(),
        selectedValue : 0,
        mode : {
            input : ''
        },
        modal: {
            input: false
        }
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

    onToday = ({value, selectedValue}) => {
        this.setState({ value, selectedValue })
    }

    setPropsValue = (selectValue) => {
        const { getValue, format: fm, mode } = this.props;
        const result = !fm ? selectValue : format(fm, selectValue);

        if ( mode === 'input') {
            const { setInputValue } = this;
            setInputValue(result);
        }

        getValue(result);
    }

    setInputValue = (value) => {
        this.setState({ mode : { input : value }})
    }

    handleModal = (bool) => {
        this.setState((prevState) => ({ modal : { ...prevState.modal, input: bool } }));
    }

    handleModalClear = () => {
        const { getValue } = this.props;
        this.setState({ mode : {input: ''}});
        getValue('');
    }

    handleModalSubmit = () => {
        this.setState({ modal : {input: false}})
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
            onToday,
            handleModal,
            handleModalClear,
            handleModalSubmit
        } = this;

        const { 
            style,
            theme,
            inputClass,
            layoutOption,
            customizeIcon,
            visibleMyDate,
            visibleToday,
            disabled,
            setDate,
            mode,
        } = this.props;

        const { 
            value,
            selectedValue,
            modal,
            mode : _mode
        } = this.state;

        const now = disabled ? Date.now() : 0;
        const classnameJoin = joinstr("calendarien", layoutOption);
        const _modal = modal[mode] ? 'modal__' + mode : ''; 

        return (
            <div className={`demnodey ${_modal}`} >
                <Input className={inputClass} mode={mode} value={_mode.input} onFocus={handleModal} readOnly />
                <Layout className={classnameJoin} theme={theme} mode={mode} style={style}>

                    { mode !== 'default' && <Status value={_mode.input}/> }

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
                        mode={mode}
                        modal={modal}
                        onMyDate={onMyDate}
                        onToday={onToday}
                        onClear={handleModalClear}
                        onSubmit={handleModalSubmit}
                    />

                </Layout>
            </div>
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
    setRange: PropTypes.arrayOf(PropTypes.number),
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