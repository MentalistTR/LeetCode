var getMinDistance = function(nums, target, start) {

    for (let i=0;i<=nums.length;i++){
    let a = nums[start-i];// Left
    let b = nums[start+i];// Right
    if (target == nums[start]) return i; 
    if (a==target || b==target) return i; 
    }

};