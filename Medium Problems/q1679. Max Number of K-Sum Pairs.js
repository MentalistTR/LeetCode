var maxOperations = function(nums, k) {

    nums.sort((a,b)=>a-b)
    console.log(nums)
    let count = 0
    let left = 0
    let right = nums.length -1

    while(left < right) {
        let sum = nums[left] + nums[right]
        if(sum < k) {
            left++
        } else if(sum > k) {
            right--
        } 
        else {
            count++
            left++
            right--
        }
    }
     console.log(count)
    return count
};

maxOperations ([3,1,3,4,3])