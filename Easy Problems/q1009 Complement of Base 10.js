var bitwiseComplement = function(n) {
    let k = n.toString(2).split('')
    let newValue = "";
  
    for(let i = 0;i < k.length;i++) {
        if(k[i] === "0") {
            newValue += "1";
        } 
        else {
            newValue += "0";
        }
    }
   let result = 0
   let i = 0

   for(let p =newValue.length-1;p>=0;p--){
       result += newValue[p] * Math.pow(2,i)
       i++
   }
   return result 
 
     
 
    

      
    
};

bitwiseComplement(5)