var intersection = function (nums1, nums2) {
  let hash = {}
  let result = []

  for(const num of nums1) {
      hash[num] = true

  }
   for(let i = 0; i < nums2.length; i++){
      if(hash[nums2[i]]) {
          result.push(nums2[i])
      }
  }

return [...new Set(result)]

};



// 2. YÖNTEM  2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 



var intersection = function (nums1, nums2) {
    let empty = [];
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
          empty.push(nums1[i]);
        }
      }
    }
    console.log(empty)
    console.log(...new Set(empty))
  };

  intersection([1,2,3],[2,1,5,2])
