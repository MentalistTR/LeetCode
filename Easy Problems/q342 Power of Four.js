var isPowerOfThree = function(n) {
    let i = 0
     while(i < 100) {
        if(Math.pow(4,i) === n) return true
        i++
     }
     return false
     
 };