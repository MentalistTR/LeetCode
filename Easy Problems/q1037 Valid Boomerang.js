var isBoomerang = function(points) {
    if(points.length != 3 ) return false
    for(let i = 0;i < points.length;i++) {
        if(points[i].length != 2) {
            return false 
        }
    }
    let x1 = points[1][0] - points[0][0]
    let y1 = points[1][1] - points[0][1]

    let x2 = points[2][0] - points[0][0]
    let y2 = points[2][1] - points[0][1]
   
    return x1 * y2 != x2 * y1
};

isBoomerang([[1,1],[2,3],[3,2]])