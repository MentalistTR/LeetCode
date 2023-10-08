var countConsistentStrings = function(allowed, words) {
    const map = new Set(allowed);
    let count = 0
  

  for(let word of words) {
      let isConsistent = true
      for(let char of word) {
          if (!map.has(char)) {
              isConsistent = false
              break
          }
      }
      if(isConsistent) count++
  } 
    return count
};