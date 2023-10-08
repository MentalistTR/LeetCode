var findLHS = function(nums) {
    nums.sort((a,b) => a-b);

    let count =0;
    let i =0,j =1;

    while(j < nums.length) {
        if(nums[j] - nums[i] == 1) {
            count = Math.max(count,j-i +1);
            j++
        }
        else if (nums[j] - nums[i] == 0) {
            j++
        }
        else {
            i++;
        }
    }

};