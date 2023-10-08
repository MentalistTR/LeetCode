var findLengthOfLCIS = function(nums) {
    let result = 0;
    let anchor = 0;

    for(let i = 0;i < nums.length;i++) {
        if(i > 0 && nums[i-1] >= nums[i]) {
            anchor = i;

        }
        result = Math.max(result,i - anchor + 1)
    }

   return result
};

findLengthOfLCIS([1,3,5,4,2,3,4,5])