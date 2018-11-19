import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./common/Layout";
import Header from "./common/Header";
// import Footer from "./common/Footer";

import Viewer from "./calendar/Viewer";

import { format } from "./utils/format";
// import { SHORTMONTH } from "./utils/dates";

class Calendarien extends Component {

    static defaultProps = {
        layout : {
            width: "100%",
            height: "inheriet",
            background: 'white',
            color: '#262626'
        },
        now : () => new Date(),
        mode : 'default',
        allowRange : [],
        disabled : false,
        customizeIcon: []
    }

    componentDidMount() {
        const { now } = this.props;
    }

    handleSelect = () => {

    }

    handleNext = (action) => {
        console.log(action)
    }

    handlePrev = (action) => {
        console.log(action)
    }


    render () {

        const {
            handleSelect,
            handleNext,
            handlePrev
        } = this;

        const { 
            layout, 
            now,
            customizeIcon
         } = this.props;

        const nowTime = now();

        return (
            <Layout className="calendarien" style={layout}>
                <Header 
                    title={format('sm dd, yyyy', nowTime)} 
                    customizeIcon={customizeIcon}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
                <Viewer
                    date={nowTime}
                    height={layout.height}
                    handleSelect={handleSelect}
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
    now: PropTypes.func,
    mode: PropTypes.string,
    allowRange: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    customizeIcon: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.object, 
            PropTypes.string,
        ])
    ),
}

export default Calendarien;