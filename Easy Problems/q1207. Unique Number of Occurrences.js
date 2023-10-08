var uniqueOccurrences = function(arr) {
    let count = 0
 
     arr.sort()
     let result = [];
    for(let i = 0;i < arr.length;i++) {
        count = 0
        for(let j = 0;j < arr.length;j++) {
            if(arr[i] === arr[i-1]) {
                break
            }
           
            if( arr[i] === arr[j]) {
                count++
            }
        }
        if(count !== 0)
          result.push(count)
          
    }
    console.log(result)
     
    for(let k =0;k < result.length;k++) {
        for(let p = 0;p < result.length;p++) {
            if(k!==p &&  result[k] === result[p]) {
                return false 
            }
        }
    }
    return true 
};
uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])