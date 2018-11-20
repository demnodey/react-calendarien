import { CREATE, WEEK_COUNT} from "./dates";

const defaultLine = 6;

export const zero = (n) => n < 10 ? `0${n}` : n;

export const ymd = (date) => {
    const _date = CREATE(date);
    return {
        y : _date.getFullYear(),
        m : zero(_date.getMonth() + 1),
        d : _date.getDate(),
        date
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

export const joinstr = (strArr) => {
    return strArr.join(" ");
}

export const createArray = (size) => Array.apply(null, Array(size))