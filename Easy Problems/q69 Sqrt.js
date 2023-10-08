 const sqrt = function (x) { 
    for(let i = 0; i<=x + 1; i++){
        if(i*i>x){
            return i-1;
        }
    }
    
}
sqrt(4);