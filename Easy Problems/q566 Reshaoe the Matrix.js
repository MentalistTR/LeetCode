var matrixReshape = function(mat, r, c) {

   let result = [];

   if(r*c !== mat.length * mat[0].length) return mat;

   let pR = 0;
   let pC = 0;

   for(let row = 0;row < r; row++) {
    let target = [];
    result.push(target);

    for(let col = 0; col < c; col++) {
     target.push(mat[pR][pC]);

     pC++;

     if(mat[pR][pC] === undefined) {
        pR++,
        pC= 0;
     }

    }

   }
 
       return result;
};








// 2. YÖNTEM 2.YÖNTEM 2. YÖNTEM


var matrixReshape = function(mat, r, c) {
   
    let arr = mat.flat();
    if(r * c != arr.length) return mat;
 
    let res = [];
    
   for(let i = 0; i < r;i++) { 
   res.push(arr.splice(0, c));
   }
    return res;
    
};