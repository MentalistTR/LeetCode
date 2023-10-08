 /* var removeDuplicates = function(nums) {

    if(nums.length === 0) return 0;
    let k = 1
   
   for(let i =0;i <nums.length;i++) {
    for(let j =0; j < nums.length;j++) {
        if(i !== j && nums[i] === nums[j]) {
            nums [i] = '-';
            k++;
            
        }  
    }

   }
   console.log(k)


};  */

// removeDuplicates([1,2,2,2,3]);

// 2. YONTEM 

const removeDuplicates = (nums) => {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};