var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => a-b);

    for(let i = 0;i < nums.length && k > 0;i++) {
        if(nums[i] < 0) {
            nums[i] = -nums[i]
            k--
        }
        else break;
    }
    nums.sort((a,b) => a-b);

    let sum = 0;

    for(let j = 1;j < nums.length;j++) {
        sum += nums[i]
    }

    if(k%2 === 0) {
        sum += nums[0]
    } else {
        sum -= nums[0]
    }

    return sum;
};


largestSumAfterKNegations([-4,-2,-3],4)