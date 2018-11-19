import { zero } from "./util";
import { SHORT_MONTH, CREATE } from "./dates";

export const format = (pattern, value) => {
    const d = CREATE(value);
    const result = pattern.replace(/(yyyy|mm|dd|yy|MM|DD|sm)/gi, (n) => {
        switch(n) {
            case "yyyy" : return d.getFullYear();
            case "mm" : return d.getMonth() + 1;
            case "dd" : return d.getDate();
            case "yy" : return d.getFullYear().substring(2);
            case "MM" : return zero(d.getMonth() + 1);
            case "DD" : return zero(d.getDate());
            case "sm" : return SHORT_MONTH(d.getMonth());
            default : return "";
        }
    })
    
    return result;
}