var findShortestSubArray = function(nums) {
    nums.sort((a,b) => a-b);
    
    let count;
    
    let answer = 0
    let finalCount = 0
    
    for(let i = 0;i < nums.length;i++) {
        count = 0;
        for(let j = 0;j < nums.length;j++) {
            if( nums[i] == nums[j]) {
                count++
            }
        }
      
        if(count > finalCount) {
            finalCount = count
            answer = nums[i]
        }
      
    }

   console.log(finalCount)
    console.log(answer);
}

findShortestSubArray([1,2,2,3,1])