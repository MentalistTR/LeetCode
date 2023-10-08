var merge = function(nums1, m, nums2, n) {

    for (let i = nums1.length - 1; i > m - 1; i--) {
        nums1.splice(i, 1);
      }
      for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
      }
      nums1.sort((a, b) => a - b);
    };
    
merge([1,1,3],2,[2,3,4,5],2);

// 


// let arr = [5,2,4,6,1,3];
// let j 

// for(let i = 1;i <arr.length;i++) {
//     let curretnValue = arr[i]

//     for( j =i -1;j>=0 && arr[j] > curretnValue;j--) {
       
//         arr[j+1] = arr[j]
        
//     }
//     arr[j+1] = curretnValue

// }

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left,right) {
  const sortedArr = [];

  while(left.length && right.length) {
      if(left[0] <= right[0]) {
          sortedArr.push(left.shift())
      } else {
          sortedArr.push(right.shift())
      }
  }
  return [...sortedArr,...left,...right]

}
const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr))
