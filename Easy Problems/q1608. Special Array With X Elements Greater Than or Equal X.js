var specialArray = function(nums) {
    let count = 0
   
   for(let i = 1;i <= nums.length;i++) {
       count = 0
       for(let j = 0; j < nums.length;j++) {
           if(nums[j] >= i) count++
       }
       if(i === count ) {
          return i
       }
   }

   return -1 


    
};

// 2. yontem 

var specialArray = function(nums) {
    let sorted = nums.sort((a, b) => b - a);
    // 7,7, 6, 3, 0
    let hIndex = -1;
    for (let i = 1; i <= nums.length; i++) {
        if (sorted[i - 1] >= i) {
            hIndex = i;
        } else {
            if (sorted[i - 1] >= hIndex) {
                hIndex = -1;
            }
            break;
        }
    }
    return hIndex;
};