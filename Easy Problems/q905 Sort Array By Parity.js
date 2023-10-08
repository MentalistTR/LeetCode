var sortArrayByParity = function(nums) {
    let result = [];

    for(let i = 0;i < nums.length;i++) {
        if(nums[i] % 2 === 0) {
            result.push(nums[i])
        }
    }

    for(let j = 0;j < nums.length;j++) {
        if(nums[j] % 2 === 1) {
            result.push(nums[j])
        }
    }

    return result;
    
};