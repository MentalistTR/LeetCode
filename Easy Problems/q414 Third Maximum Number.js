var thirdMax = function(nums) {
    const arr = [...new Set(nums)];
    
    arr.sort((a,b) => a-b);

    if(arr.length >= 3) {
          return arr[arr.length -3]
    } else {
          return arr[arr.length-1]
    }
    
};

thirdMax([4,1,2,2,1,3,4])