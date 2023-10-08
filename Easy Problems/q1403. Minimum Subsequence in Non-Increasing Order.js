
var minSubsequence = function(nums) {
    let sum = 0
    let sum1 = 0
    let sum2
    let count = 0
 
    for(let i = 0; i < nums.length;i++) {
        sum += nums[i]
    }
    nums.sort((a,b) => b-a)
   
    for(let j = 0;j < nums.length;j++) {
        sum1 += nums[j]
        sum2 = sum - sum1
        console.log(sum1)
        count++
        if(sum1 > sum2) {
            break
        }
    }
    console.log(count)
    return nums.slice(0,count)

};

minSubsequence([4,3,10,9,8])
    
