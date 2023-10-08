var judgeCircle = function(moves) {
    let sum1 = 0;
    let sum2 = 0;

    for(let i =0;i < moves.length;i++) {
        if(moves[i] === 'U') {
            sum1 +=1
        } else  if(moves[i] === 'D') {
            sum1 -=1
        } else  if(moves[i] === 'R') {
            sum2 +=1
        } else  if(moves[i] === 'L') {
            sum2 -=1
        }
        
    }

if( sum1 == 0 && sum2 == 0) {
    return true
} else {
  return  false
}
    
};