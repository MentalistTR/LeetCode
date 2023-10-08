function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr,rightArr) {
    const sortedArr = []
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }
        else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr,...rightArr]
}

// 2. yontem  buble sorting 

function bblSort(arr) {
  
    for (var i = 0; i < arr.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
  
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
  
    // Print the sorted array
    console.log(arr);
}