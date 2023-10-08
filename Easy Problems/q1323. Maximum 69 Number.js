var maximum69Number  = function(num) {
    let str = String(num)
    let res = str.replace('6','9');
    return Number(res);
};


maximum69Number(9669)
