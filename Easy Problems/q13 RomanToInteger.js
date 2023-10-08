const RomanToInteger = function(s) {

    const symb = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    
    let result = 0;

    for(let i =0;i<s.length;i++) {
        const before = symb[s[i]];
        const after = symb[s[i+1]];

        if(before < after) {
            result += after - before;
            i++;
        } else {
            result += before;
        }
    }


    return result;
}


// 2. YÖNTEM

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};
