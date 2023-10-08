var maxScore = function(s) {

    let left = 0;
    let right = s.split('').filter(x => x === '1').length;
    let max = 0;

   for(let i = 0; i < s.length -1 ; i++) {
    if(s [i] === '0') {
        left++
    } else {
        right--
    }
    max = Math.max(max,left + right)
   }

    return max 
};

maxScore ("011101")