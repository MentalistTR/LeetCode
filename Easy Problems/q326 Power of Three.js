var isPowerOfThree = function(n) {
   let i = 0
    while(i < 100) {
       if(Math.pow(3,i) === n) return true
       i++
    }
    return false
    
};

// 2. YÖNTEM 2. YÖNTEM 2.YÖNTEM 

var isPowerOfThree = function (n) {
    if (n < 1) return false;
  
    while (n % 3 === 0) {
      n /= 3;
    }
  
    return n === 1;
  };

  // 3. YÖNTEM 3.YÖNTEM 3. YÖNTEM 

  var isPowerOfThree = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    return n % 3 === 0 && isPowerOfThree(n / 3);
  };