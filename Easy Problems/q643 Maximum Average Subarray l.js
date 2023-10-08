var findMaxAverage = function(nums, k) {

    for( let i = 0; i < k ; i++) {
        sum += nums[i];
    }

   max = sum / k
   for (let i = k;i < nums.length;i++) {
    sum += nums[i] - nums[i-k];
    max = Math.max(max, sum / k)
   }
   
    return max;  
};

findMaxAverage([1,12,-5,-6,50,3], 4) 
