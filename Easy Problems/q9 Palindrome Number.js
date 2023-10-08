var isPalindrome = function(x) {

    var s = x.toString();
    var t = s.split("").reverse().join("");
    if(s === t) {
        return true;
    } else {
        return false;
    }
    
}

// 2. YÖNTEM 

var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    var half = 0;
    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === half || x === Math.floor(half / 10);
};

