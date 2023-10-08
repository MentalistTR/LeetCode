var findDisappearedNumbers = function(nums) {
   
    let result = [];

    for(let i = 1; i <= nums.length; i++) {
        if(nums.indexOf(i) < 0) {
           result.push(i)
        }
    }

    return result
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])