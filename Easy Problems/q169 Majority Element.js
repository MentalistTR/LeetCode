var majorityElement = function(nums) {
    let hashmap = {}
  
    for(let i = 0; i < nums.length;i++) {
      if(!hashmap[nums[i]]) {
        hashmap[nums[i]] = 1
      } else {
        hashmap[nums[i]] += 1
      }
      if(hashmap[nums[i]] > nums.length / 2) {
        return nums[i]
      }
    }   
  };
 
// Benim çözümüm  Benim çözümüm Benim çözümüm Benim çözümüm Benim çözümüm Benim çözümüm 

var majorityElement = function(nums) {
    if(nums.length === 1) {
       return nums[0];
   }
   nums.sort();

   let mid = Math.floor(nums.length / 2);
   return nums[mid]

   
};