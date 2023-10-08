var duplicateZeros = function(arr) {
    let result = []

    for(let i = 0;i < arr.length;i++) {
      
        if(arr[i] !== 0 ) {
            result.push(arr[i])
        }
        else if(arr[i] === 0) {
            result.push(0);
            result.push(0);
            
        }
        if(result.length === arr.length+1) {
            break
        }
       
    }
    for(let j = 0;j < arr.length;j++) {
       arr[j] = result[j]
    }
     return arr
    
};
duplicateZeros([1,0,2,3,0,4,5,0])

// 2. YÖNTEM 2. YÖNTEM

var duplicateZeros = function(arr) {
    
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i+=1
        }
    }
    
};
