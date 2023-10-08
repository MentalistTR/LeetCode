var sortArrayByParityII = function(nums) {
    if(nums.length % 2 === 1) {
        return false 
    }
    
    let result = []
    let odd = []
    let even = []

    for(let i = 0;i <nums.length;i++) {
        if(nums[i] % 2 === 0) {
            odd.push(nums[i])
        }
    }
       for(let j = 0;j <nums.length;j++) {
        if(nums[j] % 2 === 1) {
            even.push(nums[j])
        }
    }

    for(let k = 0;k<even.length;k++) {

       result.push(odd[k]);
       result.push(even[k]);

    }
    
    return result
};