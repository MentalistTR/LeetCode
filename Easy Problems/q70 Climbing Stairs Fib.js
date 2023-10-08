
var climbStairs = function(n) {
    
    let fib = 1;
    let lastNumb = 1;
    let tempory = 0;

    if(n < 4) {
        console.log(n)
    }
    for(let i =1; i <=n; i++) {
          fib = tempory + lastNumb;
          tempory = lastNumb;
          lastNumb = fib;
           
            
    }
    
    console.log(fib)

   
}
climbStairs(3)