var findPoisonedDuration = function(timeSeries, duration) {

let result = 0;

for(let i =0;i < timeSeries.length -1;i++) {
    if(timeSeries[i] + duration < timeSeries[i+1]) {
        result += duration;

    } else {
        result += timeSeries[i+1] - timeSeries[i]
    }
}
    return total + duration;
    
};