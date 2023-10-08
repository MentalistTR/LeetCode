var moveZeroes = function(nums) {

 if(nums.length === 1) return nums

let j = 0;
let i = 1;

while(i < nums.length) {
    if(nums[j] === 0 && nums[i] !== 0) {
        nums[j] = nums[i];
        nums[i] = 0;
        j++ 
    } if(nums[j] !== 0) {
        j++
    }
    i++
}

};

moveZeroes([0,1,0,3,12])