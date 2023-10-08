var runningSum = function(nums) {
    let result = [];
    let sum = 0

    for(let i = 0; i <nums.length;i++) {
         sum += nums[i]
        result.push(sum)
    }

    return result 
    
};

// 2. yontem 
const runningSum = nums => {
    let sum = 0;
    return nums.map(num => sum += num);
  };