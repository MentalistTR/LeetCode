var maxArea = function(height) {
    let left = 0
    let right = height.length -1
    let max = 0
    let area = 0

    while(left < right) {
        area= Math.min(height[left],height[right])*(right-left)
        max = Math.max(max,area)
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max 

}

maxArea([1,8,6,2,5,4,8,3,7])