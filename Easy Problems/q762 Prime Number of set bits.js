var countPrimeSetBits = function(left, right) {
    
    let result = 0;
     
    for(let i = left;i <=right;i++) {
      
        let asalcheck =true;
       
        let count = 0
        let number = i.toString(2).split('');
       
        for(let j =0;j < number.length;j++) {
            if(number[j] == 1) {
               count++
            }
         
        }
        if(count < 2) {
            asalcheck = false
        }
    
        for(let k = 2;k <= count;k++) {
         
         if(count % k === 0 && count != k ) {
             asalcheck = false;
         }
        }
     
        if(asalcheck === true) {
            result++;
        }   
       
}
   
    return result
    
};

countPrimeSetBits(6 ,10)