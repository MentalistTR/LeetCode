var minTimeToVisitAllPoints = function(points) {
   
   let count = 0

   for(let i = 1; i< points.length;i++) {
    const p0 = points[i-1]
    const p1 = points[i]
    count += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]))
   }

return count 

};