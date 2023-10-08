var missingNumber = function(nums) {
    let k = nums.length;

    const expectedsum = (k * (k +1) ) / 2;
    let actualSum = 0;

    for(let i =0;i < k.length;i++) {
        actualSum += nums[i] 
    }

    return expectedsum - actualSum; 
  
    
};