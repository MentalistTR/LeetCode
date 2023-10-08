var shuffle = function(nums, n) {
    
    let result = nums.slice(0,n)
    let ans = []
    let copy = nums.slice(n,nums.length)

    for(let i = 0; i <n;i++) {
        ans.push(result[i])
        ans.push(copy[i])
    }


    return ans 
};

// 2. yontem 

var shuffle = function(nums, n) {
    let res = []

    for(let i =0; i<nums.length/2;i++){
        res.push(nums[i],nums[i+n])
    }

    return res;
};