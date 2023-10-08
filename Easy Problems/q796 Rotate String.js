var rotateString = function(s, goal) {

   if(s === goal) return true
   if(s.length != goal.length) return false
    
 
   for(let i =1;i < s.length;i++) {
    if(s.slice(i) + s.slice(0,i) === goal) {
        return true 
    }
   }

   return false 
};

rotateString("abcde","cdeab")