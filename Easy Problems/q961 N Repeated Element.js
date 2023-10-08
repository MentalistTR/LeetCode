var repeatedNTimes = function(nums) {
    if(nums % 2 === 1) return false 
    let l = nums.length;

    let n = l / 2;
    let count;

    for(let i = 0;i < l;i++) {
        count = 0
        for(let j = 0;j < l;j++ ) {
         if(nums[i] === nums[j]) {
            count++
         }
        }
        if(count === n) {
            return nums[i]
        }
    }
    
};