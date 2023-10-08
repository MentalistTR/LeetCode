var subtractProductAndSum = function(n) {
let k = String(n)

    let result
    let product =1
    let sum =0

    for(let i = 0;i <k.length;i++) {
        product *= Number(k[i])
        sum += Number(k[i])
    }
    console.log(sum)
    return product - sum 

    
};

var subtractProductAndSum = function (n) {
    let sum = 0;
    let product = 1;
    while (n > 0) {
      let digit = n % 10;
      sum += digit;
      product *= digit;
      n = Math.floor(n / 10);
    }
    return product - sum;
  };
subtractProductAndSum(234)