var tribonacci = function(n) {
    
    if(n === 0) return 0
    if(n === 1 || n=== 2) return 1;
    
    let arr = new Array(n).fill(0);
    
    arr[1] = 1
    arr[2] = 1
    
    for(let i = 3;i <=n;i++) {
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
    }
    
        return arr[n];
    
    };