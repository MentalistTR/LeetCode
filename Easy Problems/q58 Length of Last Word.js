var lengthOfLastWord = function(s) {

  let result = s.trim().split(' ') 

   return result[result.length-1].length;
  // console.log(result[result.length-1].length)
  // console.log(result[result.length-1])

    
};

lengthOfLastWord("   fly me   to   the moon  ");