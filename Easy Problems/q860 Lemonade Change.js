var lemonadeChange = function(bills) {
 let sum = 0
 let count5 = 0
 let count10 = 0
 let count20 = 0

  for(let i =0;i<bills.length;i++) {
       if(bills[i] === 5) {
        count5++
        if(count5 < 0 || count10 < 0) {
            return false 
          }
       } 
      
       if(bills[i] === 10) {
        count10++;
        count5-- 
        if(count5 < 0 || count10 < 0) {
            return false 
          }
       }

       if(bills[i] === 20) {
        if(count10 === 0) {
            count5 -= 3
        } else {
            count10--
            count5--
           
        }
        if(count5 < 0 || count10 < 0) {
            return false 
          }
       }
  }
    return true 
};