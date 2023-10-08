var smallerNumbersThanCurrent = function(nums) {
    let result = []
    let count 

    for(let i = 0;i < nums.length;i++) {
        count = 0
        for(let j = 0;j <nums.length;j++) {
            if(nums[i] > nums[j]) {
                count++
            }
            
        }
        result.push(count)
    }
    return result 
};

// 2. YÖNTEM 2. YÖNTEM 

var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map(num => sorted.indexOf(num));
};