var findErrorNums = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);

    for(let i = 1; i <= nums.length;i++) {
        if(nums[i -1] == nums[i]) {
            result[0] = nums[i]

        }
        if(nums.indexOf(i) == -1 ) {
            result[1] = i
        }
    }
    return result
}