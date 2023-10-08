var isMonotonic = function(nums) {
    let a = nums.length;
    let count1 = 0
    let count2 = 0

    for(let i = 0;i <a;i++) {
        if(nums[i] <= nums[i+1]) {
            count1++
        }
        if(nums[i] >= nums[i+1]) {
            count2++
        }
    }
    if(count1 === a-1 || count2 === a-1) {
        return true 
    } else {
        return false 
    }
   
};