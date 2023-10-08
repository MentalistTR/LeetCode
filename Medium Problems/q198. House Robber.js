var rob = function(nums) {

    if(len === 0) return 0
    
    let dp =new Array(len+1)
    dp[0] = 0
    dp[1] = nums[0]
    
    for(let i = 1; i< len;i++) {
        dp[i+1] = Math.max(dp[i],dp[i-1] + nums[i])
    }
    return dp[nums.length]
    
    };

rob([1,2,3,1,100])