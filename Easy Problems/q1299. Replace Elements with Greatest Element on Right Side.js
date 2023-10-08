var replaceElements = function(arr) {
 var max = -1
 var temp = 0

 for(let i = arr.length-1;i >=0;i--) {
    temp = arr[i]
    arr[i] = max
    max = Math.max(max,temp)
 }

return arr   
};

// 

var replaceElements = function(arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    
    for(let i = arr.length - 2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        if(curr > max) max = curr;
    }
    
    return arr;
};