var kLengthApart = function(nums, k) {
    let result = []

    for(let i = 0;i < nums.length;i++) {
        if(nums[i] == 1) {
            result.push(i)
        }
    }
    for(let j = 0;j< result.length-1;j++) {
        if(result[j+1] - result[j] <=k) {
            return false 
        }
    }
    return true 
};

// 2. YÖNTEM 2. YÖNTEM 

var kLengthApart = function(nums, k) {
    let currentIndex = -Infinity

    for(let i = 0; i < nums.length;i++) {
        if(nums[i] === 1) {
            if(i - currentIndex <=k) {
                return false
            } else {
                currentIndex = i
            }
        }
    }
    return true 
};