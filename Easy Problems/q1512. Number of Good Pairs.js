var numIdenticalPairs = function(nums) {
    let count = 0

    for(let i = 0;i < nums.length;i++) {
        for(let j = i+1;j<nums.length;j++) {
            if(i < j && nums[i] === nums[j] && i!==j) {
                count++
            }
        }
    }

    return count 
    
};

// 2. YÖNTEM 2.YÖNTEM

var numIdenticalPairs = function (nums) {
    let numberFrequency = {};
    let combination = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!numberFrequency[nums[i]]) numberFrequency[nums[i]] = 1;
      else {
        numberFrequency[nums[i]] += 1;
      }
    }
    const values = Object.values(numberFrequency);
  
    for (const value of values) {
      if (value > 1) {
        combination += (value * (value - 1)) / 2;
      }
    }
  
    return combination;
  };