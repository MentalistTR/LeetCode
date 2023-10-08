var maximumProduct = function(nums) {
nums.sort((a,b) => a-b);

let result = 1;
let result1 = 1;

result = nums[0] * nums[1] *nums[nums.length-1]
result1 = nums[nums.length-1] * nums[nums.length-2] * nums[nums.length -3]

if(result > result1) {
    return result
} else {
    return result1
}

    
};