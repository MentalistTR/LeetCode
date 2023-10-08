var getMaximumGenerated = function(n) {
    if ( n < 2) return n

    let nums = [0,1]

    for(let i = 0; i < n + 1; i++) {
        nums[2 * i] = nums[i]
        nums[2 * i + 1] = nums[i] + nums[i + 1]
    }

   console.log(nums)

    return Math.max(...nums.slice(0, n+1 ))
    
};

getMaximumGenerated (7)