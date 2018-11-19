import { ymd } from "./util";

const fm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const WEEK_COUNT = [0, 1, 2, 3, 4 ,5 ,6];

export const CREATE = (date) => {
    if (!date) {
        return new Date();
    }
    return new Date(date);
}

export const START_DAY = (date) => {
    const _ymd = ymd(date)
    const startDay = new Date(`${_ymd.y} ${(_ymd.m + 1)} 1`).getDay();
    
    return startDay;
}

export const LAST_DATE = date => {
    const _ymd = ymd(date);
    const lastDate = new Date(`${_ymd.y} ${(_ymd.m + 1)} 31`).getDate();
    
    switch(lastDate) {
        case 1 : return 30; 
        case 3 : return 28;
        default : return 31;
    }
}

export const GET_TODAY = d => new Date(d).getDate();
export const FULL_MONTH = n => fm[n];
export const SHORT_MONTH = n => sm[n];
