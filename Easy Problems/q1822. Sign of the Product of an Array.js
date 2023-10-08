var arraySign = function(nums) {
    let sum = 1 
    for(let i = 0; i < nums.length;i++) {
        if(nums[i] === 0) {
            return 0
        }
        sum *= nums[i]
    }
    
    return sum > 0 ? 1 : -1 
};