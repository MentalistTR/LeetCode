var nearestValidPoint = function(x, y, points) {
    let min = Infinity
    let index = -1

    for(let i = 0; i < points.length;i++) {
        if(x === points[i][0] || y === points[i][1]) { 
        let current = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
        if(current < min) {
           min = current
           index = i
         }
        }
    }

    return index
};