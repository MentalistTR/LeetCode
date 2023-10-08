// var thirdMax = function(nums) {
//     const arr = [...new Set(nums)];
//     console.log(arr)
//     arr.sort((a,b) => a-b);

//     if(arr.length >= 3) {
//           return arr[arr.length -3]
//     } else {
//           return arr[arr.length-1]
//     }
    
// };

// thirdMax([4,1,2,2,1,3,4,4,4,4,4])

var hash = function(num) {
      let hashmap = {}

      for(let i = 0; i < num.length;i++) {
            if(!hashmap[num[i]]) {
                  hashmap[num[i]] = 1
            } else {
                  hashmap[num[i]] += 1
            }
      }
      

     for(const value of Object.values(hashmap)) {
      console.log(value)
     }

  


}
hash([1,2,3,4,4,4,3,3,3,3,3])


// function q4(s) {
    
//       if(!s) return false
  
//       const hashmap = {}
  
//       for(const char of s) {
//           if(char !== " ") {
//               hashmap[char] = hashmap[char] +1 || 1
//           }
//       }
  
//       let oddCount = 0;
  
//       for(const count of Object.values(hashmap)) {
//           if(count % 2 !== 0) {
//               if(oddcount >=1) {
//                   return false
//               }
  
//               oddCount += 1;
//           }
//       }
  
//      return true 
  
//     }






