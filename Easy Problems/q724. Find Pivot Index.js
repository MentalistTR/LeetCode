var pivotIndex = function(nums) {
   
    let total = 0

    for(let j=0;j<nums.length;j++) { 
    
    total+=nums[j]

    }

    let leftsum = 0
    for(let i=0;i<nums.length;i++){
        console.log(leftsum);
        

        if(leftsum===(total-nums[i]-leftsum)) return i
        leftsum+=nums[i]
    }
    return -1
};

pivotIndex([1,7,3,6,5,6])