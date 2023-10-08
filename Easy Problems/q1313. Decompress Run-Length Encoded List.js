var decompressRLElist = function(nums) {
    if(nums.length %2 !== 0) {
        return false 
    }
    let result = [];

    for(let i = 0;i <nums.length;i+=2) {
       for(let j = 1; j <= nums[i];j++) {
        result.push(nums[i+1])
       }
      
    }
    return result 
};