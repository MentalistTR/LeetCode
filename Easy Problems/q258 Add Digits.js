var addDigits = function(num) {

    if(num <=9) return num;
     
    

    let result = num % 9;
    if(result === 0) return 9;
    return result
  
    
 


};

addDigits(38);