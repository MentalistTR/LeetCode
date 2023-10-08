var search = function(nums, target) {
    let left = 0;

    let right = nums.length - 1

    while(left <= right) {
        const mid = left + (Math.floor(right - left ) / 2);
        const guess = nums[mid];

        if(nums[mid] === target) {
            return mid;
        }

        if(guess > target ) {
          right = mid -1;
        } else {
          left = mid +1;
        }
    }

    return -1
};

// 2. yontem 

var search = function(nums, target) {

    for(let i = 0; i < nums.length;i++) {
        if(nums[i] === target) {
            return i
        }
    }

    return -1
    
};


