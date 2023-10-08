var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
 

    let arr = [];
    let i = 0,j =0

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) i++ ;
        else if (nums2[j] < nums1[i]) j++ ;
        else {
            arr.push(nums1[i])
            i++
            j++
        }
    }

    return arr
  
};
  intersect([1,2,3,1,4,5,4,3],[2,3])