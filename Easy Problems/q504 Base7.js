var convertToBase7 = function(num) {
    
    if(num === 0) return '0';

    let temp = Math.abs(num);
    let res = '';

    while(temp !==0) {
        res = temp % 7 + res;
        temp = Math.floor(temp / 7);
    }

    return num >= 0 ? res : `-${res}`
    
};