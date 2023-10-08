var minOperations = function(logs) {
    let count = 0

    for(let i = 0; i < logs.length;i++) {
       const log = logs[i]
       if( log === '../') {
         if ( count > 0) count--
       } else if(log !== './') {
           count++
       }

        }

 return count 
    
};