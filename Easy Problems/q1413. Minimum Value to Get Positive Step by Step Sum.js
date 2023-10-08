var minStartValue = function(nums) {
    let sum = 0
    let min = 1

    for(let i = 0; i < nums.length;i++) {
        sum+= nums[i]
        min = Math.min(min,sum)
    }
    if(min < 0 ) {
        return (min *-1) + 1
    }
    else {
        return 1 
    }
   
    
};