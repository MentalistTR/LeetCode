var slowestKey = function(releaseTimes, keysPressed) {
  
    let ans = keysPressed[0]
    let max = releaseTimes[0]
    let times 
   
    for(let i =1;i<releaseTimes.length;i++) {
        times = releaseTimes[i] - releaseTimes[i-1]
        
        if(times > max) {
          
            max = times;
            ans = keysPressed[i] 
        }
        else if(times === max && keysPressed[i] > ans) {
            max = times
            ans = keysPressed[i]
        }
      
    }
   return ans 
    
};
slowestKey([23,34,43,59,62,80,83,92,97],"qgkzzihfc")