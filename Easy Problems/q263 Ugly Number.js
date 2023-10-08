var isUgly = function(n) {
    if(n < 1) return false;
    if(n>=1 && n <6) return true

    var divide = [2,3,5];

    for(let i =0;i < divide.length;i++) {

        while(n && n % divisor[i] === 0) {
            n = Math.floor(n / divisor[i])
        }
    }

  return n === 1;
    
};

// 2. yöntem 

var isUgly = function (n) {

    if(n <= 0) return false

    while (n != 1) {
        if (n % 2 === 0) {
            Math.floor(n /= 2);
        } else if (n % 3 === 0) {
           Math.floor (n /= 3)
        } else if (n % 5 === 0) {
            Math.floor(n /= 5)
        } else {
            return false
        }
    }

    return true
};