var largestPerimeter = function(nums) {
    if(nums.length < 3) return false 
    let result;
    nums.sort((a,b) => b-a);
    
    for(let i = 0;i < nums.length;i++) {
    result = 0
    result+= nums[i] + nums[i+1] + nums[i+2]
    if(nums[i] + nums[i+1] > nums[i+2] && nums[i+1] + nums[i+2] > nums[i] && nums[i] + nums[i+2] > nums[i+1]) {
         return result
    }
    }
    return false 
    
};