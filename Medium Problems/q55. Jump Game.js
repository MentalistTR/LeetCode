var canJump = function(nums) {
    if(nums[0] === 0 && nums.length > 1) return false

    let lastIndexPos = nums.length-1

    for(let i = nums.length-1;i >= 0;i--) {
        if( i + nums[i] >= lastIndexPos) {
            lastIndexPos = i
        }
    }

    return lastIndexPos == 0
   
};

// 2. yontem 

var canJump = function(nums) {
    // Base condition...
    if(nums.length <= 1)
        return true;
    // To keep the maximum index that can be reached...
    let maximum = nums[0];
    // Traverse all the elements through loop...
    for(let i = 0; i < nums.length; i++){
        //if there is no way to jump to next...
        // so we should return false...
        if(maximum <= i && nums[i] == 0) 
            return false;
        //update the maximum jump...    
        if(i + nums[i] > maximum){
            maximum = i + nums[i];
        }
        //maximum is enough to reach the end...
        if(maximum >= nums.length-1) 
            return true;
    }
    return false;   
};