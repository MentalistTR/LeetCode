var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);
    console.log(x)
    console.log(y)
let i =0
let j =0
let count = 0

if(x.length < y.length){
    while(x.length !== y.length) 
    x = "0" + x;
}
else{
    while(x.length !== y.length) 
    y = "0" + y;
}

   while(i<x.length || j < y.length) {
      if(x[i] !== y[j]) {
        count++
      }
    i++
    j++
   }
    console.log(count)
   return count
    
};

hammingDistance(4,14)