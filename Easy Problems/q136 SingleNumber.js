var singleNumber = function(nums) {
  nums.sort();

  for(let i =0;i < nums.length;i++) {
    if(nums[i] == nums[i+1]) {
      i++;
    } else {
      return nums[i];
    }
  }


};