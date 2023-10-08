var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a-b)
   
    let sum1= (arr[1] - arr[0])

    for(let i = 2; i < arr.length;i++) {
        if(arr[i] -arr[i-1] !== sum1) return false 
    }
    
    return true 
}