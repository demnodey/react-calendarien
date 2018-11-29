import { CREATE, WEEK_COUNT} from "./dates";

const defaultLine = 6;

export const zero = (n) => n < 10 ? `0${n}` : n;

export const ymd = (date) => {
    const _date = CREATE(date);
    return {
        y : _date.getFullYear(),
        m : zero(_date.getMonth() + 1),
        d : zero(_date.getDate()),
        date
    }
}

export const pnCalculator = ({year, month}, operator) => {

    const _m = parseInt(month, 10) + (1 * operator);

    switch (_m) {
        case 0 : return { y: year - 1, m: 12 };
        case 13 : return { y: year + 1, m: 1 };
        default : return { y: year, m: _m };
    }
}

export const line = (start, end) => {
    const wc = WEEK_COUNT.length;
    const diver = end - start;

    const share = Math.ceil(diver / wc);
    const rest = diver % wc; 
    // defaultLine + share + (rest && 1)

    return {
        share, 
        rest, 
        total : defaultLine
    };
}

export const joinstr = (strArr, Arr) => {

    if (typeof strArr === 'string') {
        if (Array.isArray(Arr) && Arr.length === 0) return strArr;
        Arr = [strArr, ...Arr];
        return Arr.join(" ");
    }

    return strArr.join(" ");
};

export const isValid = (d) => {
    if (typeof d !== 'string') return false;
    const check = new Date(d);
    if (typeof check !== 'object') return false;
    if (isNaN(check.getDate())) return false;
    return true;
}

export const createArray = (size) => Array.apply(null, Array(size));