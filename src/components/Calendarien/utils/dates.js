import { ymd } from "./util";

const fm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const timeflow = {
    month: 1000 * 60 * 60 * 24 * 30,
    day: 1000 * 60 * 60 * 24,
    // hour : 1000 * 60 * 60,
    // minute: 1000 * 60,
    // seconds: 1000 
}

export const WEEK_COUNT = [0, 1, 2, 3, 4 ,5 ,6];

export const MILLISECONDS = (date) => {
    if (!date) {
        return Date.now();
    }
    return new Date().getTime();
}

export const CREATE = (date) => {
    if (!date) {
        return new Date();
    }
    return new Date(date);
}

// 
export const START_DAY = (date) => {
    const _ymd = ymd(date);
    const startDay = new Date(`${_ymd.y}-${(_ymd.m)}`).getDay();

    return startDay;
}

export const LAST_DATE = date => {
    const _ymd = ymd(date);
    const lastDate = new Date(`${_ymd.y}-${(_ymd.m)}-31`).getDate();
    
    switch(lastDate) {
        case 1 : return 30; 
        case 3 : return 28;
        default : return 31;
    }
}

export const MOVE_MONTH = (milliseconds, move) => {
    const _move = parseInt(move, 10);
    const _milliseconds = parseInt(milliseconds, 10)
    const { month } = timeflow;

    if (isNaN(_move)) {
        return false;
    } 

    return  _milliseconds + (month * move);
}
 
export const FULL_MONTH = n => fm[n];
export const SHORT_MONTH = n => sm[n];
