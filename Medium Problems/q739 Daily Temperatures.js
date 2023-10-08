var dailyTemperatures = function(temperatures) {
    let count = 0
    let result = []
    for(let i = 0;i < temperatures.length;i++) {
          count = 0
        
        for(let j = i + 1;j< temperatures.length;j++) {
            count++
            if(temperatures[i] < temperatures[j]){
                result.push(count)
                break
            }
            if(j == temperatures.length-1) {
                result.push(0)
            }
        }
    }
    result.push(0)
    return result 
};