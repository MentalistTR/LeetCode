var maxAscendingSum = function(nums) {
    let max = nums[0]
    let result = nums[0]
    for(let i = 0; i < nums.length;i++) {
        if(nums[i] > nums[i-1]) {
            max +=nums[i]
        }
        else max = nums[i]
    
    result = Math.max(result,max)

    }

    return result 

    
};