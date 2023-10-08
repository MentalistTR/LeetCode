var prefixesDivBy5 = function(nums) {
    let ans = []

    let len = nums.length
    let n = 0
    for(let i = 0; i < len; i++) {
        n = n * 2 + nums[i]
        n = n % 5
        ans.push(n === 0)
    }

    return ans
}