var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0

    for(let i = 0; i<endTime.length;i++) {
        if(startTime[i] <= queryTime && endTime[i] >= queryTime) {
            count++
        }
    }
    return count 
    
};