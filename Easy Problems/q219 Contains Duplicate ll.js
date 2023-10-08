var containsNearbyDuplicate = function(nums, k) {

    if(nums.length === 1) return false;
    const obj = {};

    for(let i =0;i < nums.length;i++) {
        if(obj[nums[i]] >=0 && Math.abs(obj[nums[i]] - i) <=k) {
            return true;
        }

        obj[nums[i]] = i;
    }

    return false;

};

containsNearbyDuplicate([1,2,3,1,2,3],2);