var smallestRangeI = function(nums, k) {

    let min_Value = nums[0]
    let max_Value = nums[0];

    for(let i =0;i <nums.length;i++) {
        min_Value = Math.min(min_Value,nums[i])
        max_Value = Math.max(max_Value,nums[i])
    }

    if(min_Value + k >= max_Value -k) {
        return 0
    } else {
        return ((max_Value - k) - (min_Value + k ))
    }
    
};