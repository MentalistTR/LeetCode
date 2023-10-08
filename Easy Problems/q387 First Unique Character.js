var firstUniqChar = function(s) {


  let sArray = s.split("")
  let count =0;


  for(let i =0;i < sArray.length;i++) {
    count = 0;
    for(let j =0;j < sArray.length;j++) {
        if(sArray[i] === sArray[j] && i !== j ) {
             count++
        }

    }
      if(count === 0) {
        console.log(i)
        return i
      }

  }

  return -1

};

firstUniqChar("bb")

// 2. yonntem 2. yontem

var firstUniqChar = function(s) {
    for(i=0; i<s.length; i++) { 
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) { 
        return i
        }
        }
        return -1
}