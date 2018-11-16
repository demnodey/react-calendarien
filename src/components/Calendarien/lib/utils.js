class Utils {
    constructor () {
        this.initialize();
    }

    // initalize
    initialize () { 
        this.now = Date.now();
        this.matrix();
    }

    // short month format
    sm (n) {
        const sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return sm[n];
    }

    // format
    format = (pattern, value) => {

        const { create, zero, sm } = this;

        const d =  create(value);
        const result = pattern.replace(/(yyyy|mm|dd|yy|MM|DD|sm)/gi, (n) => {
            switch(n) {
                case "yyyy" : return d.getFullYear();
                case "mm" : return d.getMonth() + 1;
                case "dd" : return d.getDate();
                case "yy" : return d.getFullYear().substring(2);
                case "MM" : return zero(d.getMonth() + 1);
                case "DD" : return zero(d.getDate());
                case "sm" : return sm(d.getMonth());
                default : return "";
            }
        })

        return result;
    }

    create = (v, init) => {
        const c = v ? v : this.now;
        return new Date(c);
    }

    // zero add at month and day
    zero = (n) => n < 10 ? `0${n}` : n;

    // last day 
    ld = (m) => {

        const { ym } = this;
        const df = ym(m);
        const lastDay = new Date(`${df.y} ${df.m} 31`).getDate();

        return lastDay === 1 ? "30" : "31";
    }

    // ym is only return to year, month 
    ym = (m, origin) => {
        const { create } = this; 
        const d = create(m);

        if (origin) {
            return { y : d.getFullYear(), m : d.getMonth() }
        }
        
        return { y : d.getFullYear(), m : d.getMonth() + 1 }
    }

    // input data
    matrix = () => {
        
        const wc = 7;

        const { ym } = this;
        
        const df = ym();
        const firstDay = new Date(`${df.y} ${df.m} 1`).getDay();


        const data = {
            prev: {
                y: "",
                m: "",
                d: ""
            },
            next: {
                y: "",
                m: "",
                d: ""
            },
            now: {
                active: false,
                y: "",
                m: "",
                d: ""
            }
        }

        const neo = {
            "1st": [],
            "2nd": [],
            "3rd": [],
            "4th": [],
            "5th": [],
            "6th": [] 
        }

        const datas = Object.getOwnPropertyNames(neo).map((d, i) => { 
            for (var i = 0; i < wc; i++) {
                if (i < firstDay) {
                    neo[d][i] = data
                }
                
            }
        })
        
    }
}

const utils = new Utils();

export default utils;