import { CREATE, WEEK_COUNT} from "./dates";

const defaultLine = 1;

export const zero = (n) => n < 10 ? `0${n}` : n;

export const ymd = (date) => {
    const _date = CREATE(date);
    return {
        y : _date.getFullYear(),
        m : _date.getMonth(),
        d : _date.getDate()
    }
}

export const line = (start, end) => {
    const wc = WEEK_COUNT.length;
    const diver = end - start;

    const share = Math.floor(diver / wc);
    const rest = Math.floor(diver % wc); 
    const total = defaultLine + share + (rest && 1);

    return {
        share, rest, total 
    };
}

export const createArray = (size) => Array.apply(null, Array(size))