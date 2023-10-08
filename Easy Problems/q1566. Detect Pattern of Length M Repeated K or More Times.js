var containsPattern = function(arr, m, k) {
    if((m * k) > arr.length) {
        return false 
    }
    for(let i = m, cnt = 0; i < arr.length;i++) {
        if(arr[i] != arr[i-m]) cnt = 0
        else if(++cnt == m * (k-1)) {
            return true 
        }
    }

    return false 

    
};