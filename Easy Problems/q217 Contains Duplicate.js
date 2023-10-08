var containsDuplicate = function(nums) {
    if(nums.length >= 1 || nums.length <= Math.pow(10,5)) { 

   let hashmaps = {};

   for(let i = 0; i < nums.length;i++) {
       if(!hashmaps[nums[i]]) {
           hashmaps[nums[i]] = 1
       } else {
           hashmaps[nums[i]] += 1
       }
       if(hashmaps[nums[i]] > 1) return true 
   }
    
    }

    return false 
};


// 2. yontem kotu olan O (n2)

var containsDuplicate = function(nums) {
    if(nums.length >= 1 || nums.length <= Math.pow(10,5)) { 

    let count =0;
    let nums2 = nums

    for(let i=0;i < nums.length;i++) {
        count =0;
        for(let j =0;j <nums.length;j++) {

            if(nums[i] === nums[j] && i !== j) {
                count++
            }
            if(count >= 1) {
                console.log(true)
                return true;
            }
         

            }
        }
       
        return false
      
    
    }
};

containsDuplicate([2,14,18,22,22])