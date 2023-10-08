var eraseOverlapIntervals = function(intervals) {
    if( intervals.length === 0) return 0
    intervals.sort((a, b) => a[1] - b[1])
    console.log(intervals)
    let count = 0
    let prev_interval_end = intervals[0][1]

    for(let i = 1; i < intervals.length;i++) {
        if (intervals[i][0] < prev_interval_end) {
            count++
        }
        else {
            prev_interval_end = intervals[i][1]
        }
    }
   

    return count 
    
};
eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])