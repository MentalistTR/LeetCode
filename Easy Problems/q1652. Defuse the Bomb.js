var decrypt = function(code, k) {
    let result = []
    let sum 
  

    if( k > 0) {
        for(let i = 0; i < code.length;i++) {
            sum = 0
            for(let j = i+1;j < i+1+k;j++) {
            sum+= code[j % code.length]
            
            }
            result.push(sum)
        } 
    }
    if(k === 0) {
        for(let k = 0; k <code.length;k++) {
            result.push(0)
        }
    }

    if(k < 0) {
          let reverse = code.reverse()
         for(let i = 0; i < code.length;i++) {
            sum = 0
            for(let j = i+1;j < i+1+(k*-1);j++) {
            sum+= code[j % code.length]
            
            }
            result.push(sum)
        } 
        result.reverse()

    }
    return result 
    
};