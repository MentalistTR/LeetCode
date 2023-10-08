var plusOne = function(digits) {
    let sum = BigInt(digits.join('')) + 1n
    console.log(sum)
    return sum.toString().split('');
  }

plusOne([1,2,3])