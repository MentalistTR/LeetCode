var numPrimeArrangements = function(n) {
    let sum = 1;
    let count = 0
    let primes = [];
    let perSum = 1
    let mod = 10**9 + 7;
   

    for(let i=2;i <n;i++) {
        count = 0
        for(let j = 2;j<i;j++) {
            if(i % j === 0) {
                count++
            }
        }
        if(count === 0) {
            primes.push(i)
        }
        
    }
 console.log(primes)

    for(let k = 0;k <primes.length;k++) {
        perSum = 1
      
          for(let p =1; p <= primes[k] ;p++) {
             perSum *= p
          }
          sum *= perSum
          if(sum > 1000000007) {
            sum = sum % 1000000007
          }
    }

console.log(sum)
return sum 
    
};

numPrimeArrangements (100)