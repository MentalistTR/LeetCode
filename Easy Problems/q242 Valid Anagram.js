var stringscreamable = function(s,t)  {

    return s.split('').sort().join('') === t.split('').sort().join('');

}

// 2. yöntem 

var q2 = function(str1,str2) {

    if(str1.length !== str2.length) return false 

    let hashmap = {}

  for(let i = 0; i < str1.length;i++) {
      if(!hashmap[str1[i]]) hashmap[str1[i]] = 1
      else hashmap[str1[i]] += 1
  }

  for(const str2c of str2) {
      if(str2c in hashmap === false || hashmap[str2c] === 0) {
          return false 
      } else {
          hashmap[str2c] -= 1;
      }
  }

return true 

};
