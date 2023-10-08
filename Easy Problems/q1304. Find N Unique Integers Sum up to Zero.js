var sumZero = function(n) {
    let result = []

    if(n === 1) {
        return [0]
    }
     
    if(n % 2 === 1) { 
        result.push(0)
    }
    for(let i =1;i < n;i++) {
        result.push(i)
        result.push(-i)
        if(result.length === n) {
            break
        }
        
    }
    
    return result
 
};