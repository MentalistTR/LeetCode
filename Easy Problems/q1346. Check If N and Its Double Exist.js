var checkIfExist = function(arr) {
  

    for(let i = 0;i < arr.length;i++) {
        for(let j = 0;j < i;j++) {
            if(arr[i] === (2 * arr[j]) || arr[i]=== (arr[j] / 2) ) {
                return true 
            }
        }
    }
    return false 
    
};

// 2. YÖNTEM 2. YÖNTEM 2. YÖNTEM 

var checkIfExist = function(array) {
    while (array.length) { 
      const n = array.pop() 
      
      if (array.includes(n*2) || array.includes(n/2)) return true
    }
    return false 
  }

  // 3. yontem 

  var checkIfExist = function(arr) {
    let left = 0, right = 1;
    
    while(left < arr.length-1){
        if(arr[left] == (arr[right] * 2) || arr[right] == (arr[left] * 2)){
            return true
        }else if(right === arr.length-1){
            left++
            right = left+1
        }else{
            right++
        }
    }
    return false
};