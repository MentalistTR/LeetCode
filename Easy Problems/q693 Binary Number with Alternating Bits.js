var hasAlternatingBits = function(n) {

  let binary = n.toString(2);

  for(let i =1; i<binary.length;i++) {
    if(binary[i-1] === binary[i]) {
        return false 
    }
  }
    return true 
};

// 2. yontem 2. yontem

var hasAlternatingBits = function (num) {
    let prev = (num & 1);
    num >>= 1;
    while (num) {
        if ((num&1) == prev){
            return false;
        }
        prev = (num & 1);
        num >>= 1;
    }
    return true;
};