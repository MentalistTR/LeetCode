var areAlmostEqual = function(s1, s2) {
    
    if(s1 === s2) return true 

  let count = 0
  for(let i = 0; i <s1.length;i++) {
      if(s1[i] !== s2[i]) count++
        if(count > 2) return false 
     }
     
  let k =  s1.split('').sort().join()
  let p =  s2.split('').sort().join()

  if(k !== p) return false 
       return true   
};