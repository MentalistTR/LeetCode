var summaryRanges = function(nums) {
    let start = 0;
    let end = 0;
    let range = [];

    while(end < nums.length) {
        if(nums[start] + 1 == nums[end + 1]) {
            end++;
        } else {
            if (start == end) {
                range.push(`${nums[end]}`);
            } else {
                range.push(`${nums[start]} -> ${nums[end]}`)
                start = end + 1;
                end = end + 1
            }
        }
    }
 

    
    
    return range;
};